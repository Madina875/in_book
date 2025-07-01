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
import { Book } from "../../books/entities/book.entity";
import { Language } from "../../language/entities/language.entity";
import { AudioBook } from "../../audio_book/entities/audio_book.entity";

interface IBookVCreationAttr {
  bookId: number;
  languageId: number;
  title: string;
  description: string;
  text_url: string;
  cover_url: string;
}

@Table({ tableName: "book_version" })
export class BookVersion extends Model<BookVersion, IBookVCreationAttr> {
  @ApiProperty({ example: 1, description: "name" })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => Book)
  @ApiProperty({ example: 2010, description: "name" })
  @Column({ type: DataType.INTEGER })
  declare bookId: number;
  @BelongsTo(() => Book)
  declare book: Book;

  @ForeignKey(() => Language)
  @ApiProperty({ example: 1, description: "name" })
  @Column({ type: DataType.INTEGER })
  declare languageId: number;
  @BelongsTo(() => Language)
  declare language: Language;

  @ApiProperty({ example: "hgfd", description: "name" })
  @Column({ type: DataType.STRING })
  declare title: string;

  @ApiProperty({ example: "hgfd", description: "name" })
  @Column({ type: DataType.STRING })
  declare description: string;

  @ApiProperty({ example: "hgfd", description: "name" })
  @Column({ type: DataType.STRING })
  declare cover_url: string;

  @ApiProperty({ example: "hgfd", description: "name" })
  @Column({ type: DataType.STRING })
  declare text_url: string;

  @HasMany(() => AudioBook)
  declare audio_book: AudioBook[];
}
