import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./entities/user.entity";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { BotModule } from "../bot/bot.module";
import { Otp } from "./entities/otp.model";

@Module({
  imports: [SequelizeModule.forFeature([User, Otp]), JwtModule, BotModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
