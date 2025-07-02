import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../users/entities/user.entity";

interface ISubscriptionCreationaAttr {
  userId: number;
  endDate: string;
}

@Table({ tableName: "subscription" })
export class Subscription extends Model<
  Subscription,
  ISubscriptionCreationaAttr
> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;
  @ForeignKey(() => User)
  @ApiProperty({ example: 1, description: "id" })
  @Column({ type: DataType.INTEGER })
  declare userId: number;
  @BelongsTo(() => User)
  declare user: User;
  @ApiProperty({ example: 1, description: "id" })
  @Column({ type: DataType.DATE, defaultValue: new Date() })
  declare startDate: string;
  @ApiProperty({ example: 1, description: "id" })
  @Column({ type: DataType.STRING })
  declare endDate: string;
}
