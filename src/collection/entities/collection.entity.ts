import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Book } from "../../books/entities/book.entity";
import { BookCollection } from "../../book_collection/entities/book_collection.entity";

interface ICollectionCreationAttr {
  title: string;
  description: string;
  coverImageUrl: string;
  createdBy: number;
  is_public: boolean;
  is_premiumOnly: boolean;
  is_premium: boolean;
}

@Table({ tableName: "collection" })
export class Collection extends Model<Collection, ICollectionCreationAttr> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @ApiProperty({ example: "title", description: "id" })
  @Column({ type: DataType.STRING })
  declare title: string;

  @ApiProperty({ example: "description", description: "title" })
  @Column({ type: DataType.STRING })
  declare description: string;

  @ApiProperty({ example: "image", description: "file url" })
  @Column({ type: DataType.STRING })
  declare coverImageUrl: string;

  @ApiProperty({ example: 1, description: "created by" })
  @Column({ type: DataType.INTEGER })
  declare createdBy: number;

  @ApiProperty({ example: false, description: "size mb" })
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  declare is_public: boolean;

  @ApiProperty({ example: false, description: "order index" })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare is_premiumOnly: boolean;

  @ApiProperty({ example: false, description: "order index" })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare is_premium: boolean;

  @BelongsToMany(() => Book, () => BookCollection) //if many to many on this
  book: Book[];
}
