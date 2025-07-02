import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Collection } from "../../collection/entities/collection.entity";
import { Book } from "../../books/entities/book.entity";

interface IBoocCollectionCreationAttr {
  collectionId: number;
  bookId: number;
}
//if many to many there would'n be any belongs to ...
@Table({ tableName: "book_collection" })
export class BookCollection extends Model<
  BookCollection,
  IBoocCollectionCreationAttr
> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  @ApiProperty({ example: 1, description: "id" })
  declare id: number;

  @ForeignKey(() => Collection)
  @Column({ type: DataType.INTEGER })
  @ApiProperty({ example: 1, description: "collection" })
  declare collectionId: number;

  @ForeignKey(() => Book)
  @Column({ type: DataType.INTEGER })
  @ApiProperty({ example: 1, description: "book" })
  declare bookId: number;
}
