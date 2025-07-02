import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateBookCollectionDto {
  @IsNumber()
  @ApiProperty({ example: 1, description: "id" })
  collectionId: string;
  @IsNumber()
  @ApiProperty({ example: 1, description: "id" })
  bookId: number;
}
