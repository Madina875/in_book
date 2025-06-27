import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "dir jane",
    description: "admin full name",
  })
  full_name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "dirjane@gmail.com",
    description: "admin email",
  })
  email: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "dirjane87654",
    description: "admin password",
  })
  password: string;
  @IsNotEmpty()
  @ApiProperty({
    example: true,
    description: "admin is cretor or not",
  })
  is_creator: boolean;
  // @IsNotEmpty()
  // @ApiProperty({
  //   example: true,
  //   description: "admin active or not",
  // })
  // is_active: boolean;
  phone_number: string;
  confirm_password: string;
}
