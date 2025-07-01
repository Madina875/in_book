import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Admin } from "./entities/admin.entity";

import * as bcrypt from "bcrypt";

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private readonly adminModel: typeof Admin) {}

  async create(createAdminDto: CreateAdminDto) {
    const { password, confirm_password } = createAdminDto;
    if (password !== confirm_password) {
      throw new BadRequestException("parol mos kelmadi");
    }
    const hashedPassword = await bcrypt.hash(password, 7);
    const newadmin = await this.adminModel.create({
      ...createAdminDto,
      password: hashedPassword,
    });
    return newadmin;
  }

  findAll() {
    return this.adminModel.findAll();
  }

  findOne(id: number) {
    return this.adminModel.findByPk(id);
  }
  findAdminByEmail(email: string) {
    return this.adminModel.findOne({ where: { email } });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const admin = await this.adminModel.update(updateAdminDto, {
      where: { id },
      returning: true,
    });

    return admin[1][0];
  }

  async remove(id: number) {
    const result = await this.adminModel.destroy({ where: { id } });
    if (result > 0) {
      return { message: "admin delete successfully" };
    }
    return { message: " admin not found" };
  }
}
