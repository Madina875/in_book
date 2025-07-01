import { Module } from "@nestjs/common";
import { BookVersionService } from "./book_version.service";
import { BookVersionController } from "./book_version.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { BookVersion } from "./entities/book_version.entity";
import { Language } from "../language/entities/language.entity";
import { Book } from "../books/entities/book.entity";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    SequelizeModule.forFeature([BookVersion, Language, Book]),
    JwtModule,
  ],
  controllers: [BookVersionController],
  providers: [BookVersionService],
})
export class BookVersionModule {}
