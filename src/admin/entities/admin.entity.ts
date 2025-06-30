import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IAdminCreationAttr {
  full_name: string;
  phone_number: string;
  email: string;
  password: string;
  confirm_password: string;
  is_creator: boolean;
}

@Table({ tableName: "admin" })
export class Admin extends Model<Admin, IAdminCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "admin name",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ApiProperty({
    example: "john ley",
    description: "admin fullname",
  })
  @Column({
    type: DataType.STRING,
  })
  declare full_name: string;

  @ApiProperty({
    example: "johnley@gmail.com",
    description: "admin email",
  })
  @Column({
    type: DataType.STRING,
  })
  declare email: string;

  @ApiProperty({
    example: "johnley8765",
    description: "admin email password",
  })
  @Column({
    type: DataType.STRING,
  })
  declare password: string;

  @ApiProperty({
    example: "9876543",
    description: "admin phone",
  })
  @Column({
    type: DataType.STRING,
  })
  declare phone_number: string;

  @ApiProperty({
    example: false,
    description: "admin is creator?",
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_creator: boolean;

  @ApiProperty({
    example: "johnley876543",
    description: "admin confirm password",
  })
  @Column({
    type: DataType.STRING,
  })
  declare confirm_password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_active: boolean;

  @Column({
    type: DataType.STRING,
  })
  declare refresh_token: string | null;

  @Column({
    type: DataType.STRING,
    defaultValue: DataType.UUIDV4,
  })
  declare activation_link: string;
}
