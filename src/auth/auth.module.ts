import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "../users/users.module";
import { MailModule } from "../mail/mail.module";
import { AdminModule } from "../admin/admin.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../users/entities/user.entity";
import { Admin } from "../admin/entities/admin.entity";

@Module({
  imports: [
    JwtModule.register({}),
    UsersModule,
    AdminModule,
    MailModule,
    SequelizeModule.forFeature([User, Admin]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
