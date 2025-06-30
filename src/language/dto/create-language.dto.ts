import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateLanguageDto {
  @IsString()
  @ApiProperty({
    example: "ujhgf",
    description: "jhgfd",
  })
  code: string;
  @IsString()
  @ApiProperty({
    example: "ujhgf",
    description: "jhgfd",
  })
  name: string;
  @IsString()
  @ApiProperty({
    example: "ujhgf",
    description: "jhgfd",
  })
  flag: string;
}
