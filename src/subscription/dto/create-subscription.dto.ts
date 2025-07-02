import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateSubscriptionDto {
  @IsNumber()
  @ApiProperty({ example: 1, description: "id" })
  userId: number;
  @IsNotEmpty()
  @ApiProperty({ example: 1, description: "id" })
  startDate: string;
  @ApiProperty({ example: 1, description: "id" })
  endDate: string;
}
