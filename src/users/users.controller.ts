import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { JwtUserAuthGuard } from "../common/guards/user.guard";
import { JwtUserSelfGuard } from "../common/guards/jwt-self.guard";
import { JwtUserPremiumGuard } from "../common/guards/jwt-premium.guard";
import { JwtAdminAuthGuard } from "../common/guards/admin.guard";
import { PhoneUserDto } from "./dto/phone-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAdminAuthGuard)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtUserSelfGuard)
  @UseGuards(JwtUserAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @UseGuards(JwtUserSelfGuard)
  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(JwtUserSelfGuard)
  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }

  @HttpCode(200)
  @Post("new-otp")
  newOtp(@Body() phoneUserDto: PhoneUserDto) {
    return this.usersService.newOtp(phoneUserDto);
  }
}
