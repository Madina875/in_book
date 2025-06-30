import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateAuthorDto {
  @IsString()
  @ApiProperty({
    example: "ujhgf",
    description: "jhgfd",
  })
  full_name: string;
  @IsString()
  @ApiProperty({
    example: "ujhgf",
    description: "jhgfd",
  })
  bio: string;
  @IsString()
  @ApiProperty({
    example: "ujhgf",
    description: "jhgfd",
  })
  photo_url: string;
}
