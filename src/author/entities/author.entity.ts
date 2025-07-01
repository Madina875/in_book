import { ApiProperty } from "@nestjs/swagger";
import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { Book } from "../../books/entities/book.entity";

interface IAuthorCreationAttr {
  full_name: string;
  bio: string;
  photo_url: string;
}

@Table({ tableName: "author" })
export class Author extends Model<Author, IAuthorCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "name",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ApiProperty({
    example: "jhgf",
    description: "name",
  })
  @Column({
    type: DataType.STRING,
  })
  declare full_name: string;

  @ApiProperty({
    example: "jhgf",
    description: "bio",
  })
  @Column({
    type: DataType.STRING,
  })
  declare bio: string;

  @ApiProperty({
    example: "jhglkjhgfds",
    description: "url",
  })
  @Column({
    type: DataType.STRING,
  })
  declare photo_url: string;

  @HasMany(() => Book)
  declare book: Book[];
}
