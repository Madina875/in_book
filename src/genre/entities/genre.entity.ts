import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IGenreCreationAttr {
  name: string;
}

@Table({ tableName: "genre" })
export class Genre extends Model<Genre, IGenreCreationAttr> {
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
  declare name: string;
}
