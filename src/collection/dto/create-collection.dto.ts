import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateCollectionDto {
  @IsString()
  @ApiProperty({ example: "title", description: "id" })
  title: string;
  @IsString()
  @ApiProperty({ example: "description", description: "title" })
  description: string;
  @IsString()
  @ApiProperty({ example: "image", description: "file url" })
  coverImageUrl: string;
  @IsNumber()
  @ApiProperty({ example: 1, description: "created by" })
  createdBy: number;
  @IsBoolean()
  @ApiProperty({ example: false, description: "size mb" })
  is_public: boolean;
  @ApiProperty({ example: false, description: "order index" })
  is_premiumOnly: boolean;
  @ApiProperty({ example: false, description: "order index" })
  is_premium: boolean;
}
