import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Author } from "../../author/entities/author.entity";
import { BookVersion } from "../../book_version/entities/book_version.entity";

interface IBookCreationAttr {
  published_year: number;
  authorId: number;
}

@Table({ tableName: "book" })
export class Book extends Model<Book, IBookCreationAttr> {
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
    example: 2010,
    description: "name",
  })
  @Column({
    type: DataType.INTEGER,
  })
  declare published_year: number;

  @ForeignKey(() => Author)
  @ApiProperty({
    example: 1,
    description: "name",
  })
  @Column({
    type: DataType.INTEGER,
  })
  declare authorId: number;

  @BelongsTo(() => Author)
  declare author: Author;

  @HasMany(() => BookVersion)
  declare book_version: BookVersion[];
}
