import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { AudioBook } from "../../audio_book/entities/audio_book.entity";

interface IAudiopartCreationAttr {
  audio_bookId: number;
  title: string;
  file_url: string;
  duration: number;
  size_mb: number;
  order_index: number;
}

@Table({ tableName: "audio_parts" })
export class AudioPart extends Model<AudioPart, IAudiopartCreationAttr> {
  @ApiProperty({ example: 2010, description: "id" })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @ForeignKey(() => AudioBook)
  @ApiProperty({ example: 2010, description: "id" })
  @Column({ type: DataType.INTEGER })
  declare audio_bookId: number;
  @BelongsTo(() => AudioBook)
  declare audio_book: AudioBook;

  @ApiProperty({ example: "title", description: "title" })
  @Column({ type: DataType.STRING })
  declare title: string;

  @ApiProperty({ example: "title", description: "file url" })
  @Column({ type: DataType.STRING })
  declare file_url: string;

  @ApiProperty({ example: 1, description: "duration" })
  @Column({ type: DataType.INTEGER })
  declare duration: number;

  @ApiProperty({ example: 1, description: "size mb" })
  @Column({ type: DataType.DECIMAL(10, 2) })
  declare size_mb: number;

  @ApiProperty({ example: 1, description: "order index" })
  @Column({ type: DataType.INTEGER })
  declare order_index: number;
}
