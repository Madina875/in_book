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

@Module({
  imports: [
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
      models: [User, Admin, Author, Category, Genre, Language],
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
