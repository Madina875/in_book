import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./entities/user.entity";
import * as bcrypt from "bcrypt";
import * as otpGenerator from "otp-generator";
import { PhoneUserDto } from "./dto/phone-user.dto";
import { BotService } from "../bot/bot.service";
import { Otp } from "./entities/otp.model";
import { AddMinutesToDate } from "../common/helpers/addMinutes";
import { timestamp } from "rxjs";
import { encode } from "../common/helpers/crypto";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
    @InjectModel(Otp) private readonly otpModel: typeof Otp,
    private readonly botService: BotService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { password, confirm_password } = createUserDto;
    if (password !== confirm_password) {
      throw new BadRequestException("parollar mos emas");
    }

    const hashed_password = await bcrypt.hash(password, 7);
    const newUser = await this.userModel.create({
      ...createUserDto,
      password: hashed_password,
    });

    return newUser;
  }

  findAll() {
    return this.userModel.findAll();
  }

  findOne(id: number) {
    return this.userModel.findByPk(id);
  }
  findUserByEmail(email: string) {
    return this.userModel.findOne({ where: { email } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.update(updateUserDto, {
      where: { id },
      returning: true,
    });
    return user[1][0];
  }
  // async updateRefreshToken(id: number, refresh_token: string) {
  //   const user = await this.userModel.update(
  //     { refresh_token },
  //     {
  //       where: { id },
  //     }
  //   );
  //   return user;
  // }

  async remove(id: number) {
    const user = await this.userModel.destroy({ where: { id } });
    if (!this.userModel.findByPk(id)) {
      return { message: "user not found" };
    }
    return { message: "user deleted successfully" };
  }

  async newOtp(phoneUserDto: PhoneUserDto) {
    const phone_number = phoneUserDto.phone;

    const otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    const isSend = await this.botService.sendOtp(phone_number, otp);
    if (!isSend) {
      throw new BadRequestException("Avval botdan ro'yhatdan o'ting!");
    }

    const now = new Date();
    const expiration_time = AddMinutesToDate(now, 5);
    await this.otpModel.destroy({ where: { phone_number } });
    const dbOtp = await this.otpModel.create({
      otp,
      expiration_time,
      phone_number,
    });

    const details = {
      timestamp: now,
      phone_number,
      otp_id: dbOtp.id,
    };
    // calling encode from helpers
    const encodedData = await encode(JSON.stringify(details)); //shifrlash

    return {
      message: "OTP botga yuborildi",
      verificationCode: encodedData,
    };
  }
}
