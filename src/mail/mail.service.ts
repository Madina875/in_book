import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { User } from "../users/entities/user.entity";
import { Admin } from "src/admin/entities/admin.entity";

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(user: User) {
    const url = `${process.env.api_url}/api/auth/users/activate/${user.activation_link}`;
    console.log(url);
    await this.mailerService.sendMail({
      to: user.email,
      subject: "welcome to InBook App! User",
      template: "./confirmation",
      context: {
        username: user.full_name,
        url,
      },
    });
  }

  async sendAdminConfirmation(admin: Admin) {
    const url = `${process.env.api_url}/api/auth/admin/activate/${admin.activation_link}`;
    await this.mailerService.sendMail({
      to: admin.email,
      subject: "welcome to InBook App! Admin",
      template: "./admin_confirmation",
      context: {
        username: admin.full_name,
        url,
      },
    });
  }
}
