import { Module } from "@nestjs/common";
import { BooksService } from "./books.service";
import { BooksController } from "./books.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Book } from "./entities/book.entity";
import { Author } from "../author/entities/author.entity";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [SequelizeModule.forFeature([Book, Author]), JwtModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
