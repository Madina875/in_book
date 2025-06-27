import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    example: "user1",
    description: "users name",
  })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({
    example: "user1@gmail.com",
    description: "users email",
  })
  @IsEmail()
  email: string;

  // @IsStrongPassword({ minLength: 6, minUppercase: 0, minSymbols: 0 })
  password: string;

  @ApiProperty({
    example: 2010,
    description: "users birth year",
  })
  @IsNotEmpty()
  birth_year: number;

  @ApiProperty({
    example: "male",
    description: "users gender",
  })
  @IsString()
  @IsNotEmpty()
  gender: string;

  // is_active: boolean;
  confirm_password: string;
  phone: string;
}
