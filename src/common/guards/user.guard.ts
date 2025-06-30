import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { verify } from "crypto";
import { Observable } from "rxjs";

@Injectable()
export class JwtUserAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    // console.log(req);
    // console.log(req.headers);
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException({ message: "AuthHeader not found 👾❌" });
    }
    const bearer = authHeader.split(" ")[0];
    const token = authHeader.split(" ")[1];
    if (bearer != "Bearer" || !token) {
      throw new UnauthorizedException({
        message: "BearerToken not found 👾❌",
      });
    }

    //logika
    let decodedPayload: object;
    try {
      decodedPayload = this.jwtService.verify(token, {
        secret: process.env.ACCESS_TOKEN_KEY, //here teacher gaved a token
      });
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException({
        message: "foydalanuvchi autorizatsiyadan o'tmagan",
        error: error,
      });
    }
    req.users = decodedPayload;
    return true;
    // return verify(token , this.jwtService)
  }
}

// import {
//   CanActivate,
//   ExecutionContext,
//   Injectable,
//   UnauthorizedException,
// } from "@nestjs/common";
// import { JwtService } from "@nestjs/jwt";
// import { Observable } from "rxjs";

// @Injectable()
// export class JwtUserAuthGuard implements CanActivate {
//   constructor(private readonly jwtService: JwtService) {}
//   canActivate(
//     context: ExecutionContext
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const req = context.switchToHttp().getRequest();
//     // console.log(req);
//     // console.log(req.headers);
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//       throw new UnauthorizedException({ message: "AuthHeader not found 👾❌" });
//     }
//     const bearer = authHeader.split(" ")[0];
//     const token = authHeader.split(" ")[1];

//     if (bearer != "Bearer" || !token) {
//       throw new UnauthorizedException({
//         message: "BearerToken not found 👾❌",
//       });
//     }

//     async function verify(token: string, jwtService: JwtService) {
//       let decodedPayload: any;
//       try {
//         decodedPayload = this.jwtService.verify(token, {
//           secret: process.env.ACCESS_TOKEN_KEY,
//         });
//       } catch (error) {
//         throw new UnauthorizedException({
//           message: "foydalanuvchi autorizatsiyadan o'tmagan",
//           error: error,
//         });
//       }
//       if (!decodedPayload) {
//         throw new UnauthorizedException({
//           message: "foydalanuvchi autorizatsiyadan o'tmagan",
//         });
//       }
//       if (!decodedPayload.is_active) {
//         throw new UnauthorizedException({
//           message: "foydalanuvchi faol emas",
//         });
//       }
//       req.users = decodedPayload;
//       return true;
//     }
//     return verify(token, this.jwtService);
//   }
// }
