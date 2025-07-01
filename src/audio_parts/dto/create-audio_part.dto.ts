import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateAudioPartDto {
  @IsNumber()
  @ApiProperty({ example: 2010, description: "id" })
  audio_bookId: number;
  @IsString()
  @ApiProperty({ example: "title", description: "title" })
  title: string;
  @IsString()
  @ApiProperty({ example: "title", description: "file url" })
  file_url: string;
  @IsNumber()
  @ApiProperty({ example: 1, description: "duration" })
  duration: number;
  @IsNumber()
  @ApiProperty({ example: 1, description: "size mb" })
  size_mb: number;
  @IsNumber()
  @ApiProperty({ example: 1, description: "order index" })
  order_index: number;
}
