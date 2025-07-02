import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateBookMarkDto {
  @IsNumber()
  @ApiProperty({ example: 1, description: "id" })
  userId: number;
  @IsNumber()
  @ApiProperty({ example: 1, description: "id" })
  bookId: number;
  @IsNumber()
  @ApiProperty({ example: "uytr", description: "id" })
  note: string;
  @IsNumber()
  @ApiProperty({ example: "tre", description: "id" })
  position: string;
}
