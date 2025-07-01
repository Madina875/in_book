import { Module } from "@nestjs/common";
import { AudioBookService } from "./audio_book.service";
import { AudioBookController } from "./audio_book.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { AudioBook } from "./entities/audio_book.entity";
import { BookVersion } from "../book_version/entities/book_version.entity";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [SequelizeModule.forFeature([AudioBook, BookVersion]), JwtModule],
  controllers: [AudioBookController],
  providers: [AudioBookService],
})
export class AudioBookModule {}
