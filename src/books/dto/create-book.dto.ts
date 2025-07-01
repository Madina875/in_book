import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateBookDto {
  @IsNumber()
  @ApiProperty({
    example: 2010,
    description: "year",
  })
  published_year: number;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: "name",
  })
  authorId: number;
}
