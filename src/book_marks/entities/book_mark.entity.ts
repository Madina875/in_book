import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../users/entities/user.entity";
import { Book } from "../../books/entities/book.entity";

interface IBookMarkCreationAttr {
  userId: number;
  bookId: number;
  position: string;
  note: string;
}

@Table({ tableName: "book_mark" })
export class BookMark extends Model<BookMark, IBookMarkCreationAttr> {
  @ApiProperty({ example: 1, description: "id" })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @ForeignKey(() => User)
  @ApiProperty({ example: 1, description: "id" })
  @Column({ type: DataType.INTEGER })
  declare userId: number;

  @ForeignKey(() => Book)
  @ApiProperty({ example: 1, description: "id" })
  @Column({ type: DataType.INTEGER })
  declare bookId: number;

  @ApiProperty({ example: "uytr", description: "id" })
  @Column({ type: DataType.STRING })
  declare note: string;
  @ApiProperty({ example: "tre", description: "id" })
  @Column({ type: DataType.STRING })
  declare position: string;
}
