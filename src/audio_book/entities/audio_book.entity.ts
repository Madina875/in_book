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
import { BookVersion } from "../../book_version/entities/book_version.entity";
import { AudioPart } from "../../audio_parts/entities/audio_part.entity";

interface IAudioBookCreationAttr {
  book_versionId: number;
  narrator_name: string;
  total_size_mb: number;
  total_duration: number;
}

@Table({ tableName: "audio_book" })
export class AudioBook extends Model<AudioBook, IAudioBookCreationAttr> {
  @ApiProperty({ example: 5, description: "name" })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @ForeignKey(() => BookVersion)
  @ApiProperty({ example: 5, description: "name" })
  @Column({ type: DataType.INTEGER })
  declare book_versionId: number;
  @BelongsTo(() => BookVersion)
  declare book_version: BookVersion;

  @ApiProperty({ example: "hgfd", description: "name" })
  @Column({ type: DataType.STRING })
  declare narrator_name: string;

  @ApiProperty({ example: 5, description: "name" })
  @Column({ type: DataType.DECIMAL(10, 2) })
  declare total_size_mb: number;

  @ApiProperty({ example: 5, description: "name" })
  @Column({ type: DataType.INTEGER })
  declare total_duration: number;

  @HasMany(() => AudioPart)
  declare audio_part: AudioPart[];
}
