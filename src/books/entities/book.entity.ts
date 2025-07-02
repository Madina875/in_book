import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Author } from "../../author/entities/author.entity";
import { BookVersion } from "../../book_version/entities/book_version.entity";
import { Collection } from "../../collection/entities/collection.entity";
import { BookCollection } from "../../book_collection/entities/book_collection.entity";
import { User } from "../../users/entities/user.entity";
import { BookMark } from "../../book_marks/entities/book_mark.entity";

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

  @BelongsToMany(() => Collection, () => BookCollection)
  collection: Collection[];
  @BelongsToMany(() => User, () => BookMark)
  user: User[];
}
