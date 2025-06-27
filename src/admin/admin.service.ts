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

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return this.adminModel.destroy({ where: { id } });
  }
}
