import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAdminCreatorGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    // console.log(req.headers);
    console.log(req.admin);
    if (!req.admin.is_creator) {
      throw new ForbiddenException({
        message: "ruhsat etilmagan foydalanuvchi ❌👾",
      });
    }

    //logika
    return true;
  }
}
