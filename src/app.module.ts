import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { UsersModule } from "./users/users.module";
import { User } from "./users/entities/user.entity";
import { AuthModule } from "./auth/auth.module";
import { MailModule } from "./mail/mail.module";
import { AdminModule } from "./admin/admin.module";
import { Admin } from "./admin/entities/admin.entity";
import { CategoryModule } from "./category/category.module";
import { AuthorModule } from "./author/author.module";
import { LanguageModule } from "./language/language.module";
import { GenreModule } from "./genre/genre.module";
import { Author } from "./author/entities/author.entity";
import { Category } from "./category/entities/category.entity";
import { Genre } from "./genre/entities/genre.entity";
import { Language } from "./language/entities/language.entity";
import { TelegrafModule } from "nestjs-telegraf";
import { BOT_NAME } from "./app.constants";
import { BotModule } from "./bot/bot.module";
import { BooksModule } from "./books/books.module";
import { Book } from "./books/entities/book.entity";
import { BookVersionModule } from "./book_version/book_version.module";
import { BookVersion } from "./book_version/entities/book_version.entity";
import { AudioBookModule } from "./audio_book/audio_book.module";
import { AudioBook } from "./audio_book/entities/audio_book.entity";
import { AudioPartsModule } from "./audio_parts/audio_parts.module";
import { AudioPart } from "./audio_parts/entities/audio_part.entity";
import { Bot } from "./bot/models/bot.model";
import { Otp } from "./users/entities/otp.model";
import { CollectionModule } from "./collection/collection.module";
import { Collection } from "./collection/entities/collection.entity";
import { BookCollectionModule } from "./book_collection/book_collection.module";
import { BookCollection } from "./book_collection/entities/book_collection.entity";
import { BookMarksModule } from "./book_marks/book_marks.module";
import { BookMark } from "./book_marks/entities/book_mark.entity";
import { SubscriptionModule } from "./subscription/subscription.module";
import { Subscription } from "./subscription/entities/subscription.entity";

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName: BOT_NAME,
      useFactory: () => ({
        token: process.env.BOT_TOKEN!,
        middlewares: [],
        include: [BotModule], //bot
      }),
    }),

    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "static"), //static pictures
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [
        User,
        Admin,
        Author,
        Category,
        Genre,
        Language,
        Book,
        BookVersion,
        AudioBook,
        AudioPart,
        Bot,
        Otp,
        Collection,
        BookCollection,
        BookMark,
        Subscription,
      ],
      autoLoadModels: true,
      logging: true,
      sync: { alter: true }, //alter force sync
    }),
    UsersModule,
    AuthModule,
    MailModule,
    AdminModule,
    CategoryModule,
    AuthorModule,
    LanguageModule,
    GenreModule,
    BotModule,
    BooksModule,
    BookVersionModule,
    AudioBookModule,
    AudioPartsModule,
    CollectionModule,
    BookCollectionModule,
    BookMarksModule,
    SubscriptionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
