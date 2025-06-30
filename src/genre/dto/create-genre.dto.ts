import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateGenreDto {
  @IsString()
  @ApiProperty({
    example: "ujhgf",
    description: "jhgfd",
  })
  name: string;
}
