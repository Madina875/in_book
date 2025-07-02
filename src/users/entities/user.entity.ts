import { ApiProperty } from "@nestjs/swagger";
import { ENUM } from "sequelize";
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Book } from "../../books/entities/book.entity";
import { BookMark } from "../../book_marks/entities/book_mark.entity";
import { Subscription } from "../../subscription/entities/subscription.entity";

interface IUsersCreationAttr {
  full_name: string;
  email: string;
  password: string;
  phone: string;
  gender: string;
  birth_year: number;
}

@Table({ tableName: "users" })
export class User extends Model<User, IUsersCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "users name",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ApiProperty({
    example: "user",
    description: "user's name",
  })
  @Column({
    type: DataType.STRING,
  })
  declare full_name: string;

  @ApiProperty({
    example: "user1@gmail.uz",
    description: "users email",
  })
  @Column({
    type: DataType.STRING,
  })
  declare email: string;

  @ApiProperty({
    example: "user12345",
    description: "users password",
  })
  @Column({
    type: DataType.STRING,
  })
  declare password: string;

  @ApiProperty({
    example: ENUM("male", "female"),
    description: "users gender",
  })
  @Column({
    type: DataType.STRING,
  })
  declare gender: string;

  @ApiProperty({
    example: 2010,
    description: "users birth year",
  })
  @Column({
    type: DataType.SMALLINT,
  })
  declare birth_year: number;

  @ApiProperty({
    example: true,
    description: "users active or not",
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_active: boolean;

  @ApiProperty({
    example: true,
    description: "users active or not",
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_premium: boolean;

  @Column({
    type: DataType.STRING,
    defaultValue: DataType.UUIDV4,
  })
  declare activation_link: string;

  @Column({
    type: DataType.STRING,
  })
  declare refresh_token: string | null;

  @ApiProperty({
    example: "09876543",
    description: "users phone number",
  })
  @Column({
    type: DataType.STRING,
  })
  declare phone: string;

  @BelongsToMany(() => Book, () => BookMark)
  book: Book[];

  @HasMany(() => Subscription)
  declare subscription: Subscription[];
}
