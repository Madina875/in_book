import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { BookVersion } from "../../book_version/entities/book_version.entity";

interface ILanguageCreationAttr {
  code: string;
  name: string;
  flag: string;
}
@Table({ tableName: "language" })
export class Language extends Model<Language, ILanguageCreationAttr> {
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
    example: "jhgfd",
    description: "name",
  })
  @Column({
    type: DataType.STRING,
  })
  declare flag: string;

  @ApiProperty({
    example: "jhgfd",
    description: "name",
  })
  @Column({
    type: DataType.STRING,
  })
  declare code: string;

  @ApiProperty({
    example: "jhgfd",
    description: "name",
  })
  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @HasMany(() => BookVersion)
  declare book_version: BookVersion[];
}
