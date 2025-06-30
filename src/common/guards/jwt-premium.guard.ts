import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtUserPremiumGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    // console.log(req.headers);
    console.log(req.users);
    if (!req.users.is_premium) {
      throw new ForbiddenException({
        message: "premium ga ega emas ❌👾",
      });
    }

    //logika
    return true;
  }
}
