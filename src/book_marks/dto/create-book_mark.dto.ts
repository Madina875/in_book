import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateBookMarkDto {
  @IsNumber()
  @ApiProperty({ example: 1, description: "id" })
  userId: number;
  @IsNumber()
  @ApiProperty({ example: 1, description: "id" })
  bookId: number;
  @IsString()
  @ApiProperty({ example: "uytr", description: "id" })
  note: string;
  @IsString()
  @ApiProperty({ example: "tre", description: "id" })
  position: string;
}
