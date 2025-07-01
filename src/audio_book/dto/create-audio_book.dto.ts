import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateAudioBookDto {
  @IsNumber()
  @ApiProperty({ example: 5, description: "name" })
  book_versionId: number;

  @IsString()
  @ApiProperty({ example: "hgfd", description: "name" })
  narrator_name: string;

  @IsNumber()
  @ApiProperty({ example: 5, description: "name" })
  total_size_mb: number;

  @ApiProperty({ example: 5, description: "name" })
  total_duration: number;
}
