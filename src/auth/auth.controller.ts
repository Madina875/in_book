import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { SignInuserDto } from "../users/dto/signin-user.dto";
import { Request, Response } from "express";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { SignInadminDto } from "../admin/dto/signin-admin.dto";
import { CookieGetter } from "../common/decorators/cookie-getter.decorator";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }
  @Post("signup_admin")
  signupAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.signupAdmin(createAdminDto);
  }

  @Post("signin")
  signin(
    @Body() signInuserDto: SignInuserDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signin(signInuserDto, res);
  }

  @Post("signout")
  async signOut(@Req() req: Request, @Res() res: Response) {
    try {
      const result = await this.authService.signout(req, res);
      return res.json(result);
    } catch (error) {
      return res.status(error.status || 401).json({ message: error.message });
    }
  }

  // @HttpCode(200)
  // @Post("signout2")
  // async signOut2(
  //   @CookieGetter("refresh_oken") refreshToken: string,
  //   @Res({ passthrough: true }) res: Response
  // ) {
  //   return this.authService.signout(refreshToken, res);
  // }

  @Post("signin_admin")
  signinAdmin(
    @Body() signInAdminDto: SignInadminDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signinAdmin(signInAdminDto, res);
  }

  @Post("signout_admin")
  async signOutAdmin(@Req() req: Request, @Res() res: Response) {
    try {
      const result = await this.authService.signoutAdmin(req, res);
      return res.json(result);
    } catch (error) {
      return res.status(error.status || 401).json({ message: error.message });
    }
  }
  @Post(":id/refresh_user")
  async refreshUserToken(
    @Param("id") id: number,
    @Req()
    req: Request,
    @Res() res: Response
  ) {
    try {
      const result = await this.authService.refreshUserToken(+id, req, res);
      return res.json(result);
    } catch (error) {
      return res.status(error.status || 401).json({ message: error.message });
    }
  }

  @Post("refresh_admin")
  async refreshAdminToken(@Req() req: Request, @Res() res: Response) {
    try {
      const result = await this.authService.refreshAdminToken(req, res);
      return res.json(result);
    } catch (error) {
      return res.status(error.status || 401).json({ message: error.message });
    }
  }

  @Get("users/activate/:activation_link")
  async activateUser(@Param("activation_link") activationLink: string) {
    return this.authService.activateUser(activationLink);
  }

  @Get("admin/activate/:activation_link")
  async activateAdmin(@Param("activation_link") activationLink: string) {
    return this.authService.activateAdmin(activationLink);
  }
}
