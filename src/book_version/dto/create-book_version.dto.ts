import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBookVersionDto {
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: "book name",
  })
  bookId: number;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: "language name",
  })
  languageId: number;

  @IsString()
  @ApiProperty({
    example: "title",
    description: "book name",
  })
  title: string;

  @IsString()
  @ApiProperty({
    example: "description",
    description: "book name",
  })
  description: string;

  @IsString()
  @ApiProperty({
    example: "text_url",
    description: "book name",
  })
  text_url: string;

  @IsString()
  @ApiProperty({
    example: "cover_url",
    description: "book name",
  })
  cover_url: string;
}
