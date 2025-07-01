import { Module } from "@nestjs/common";
import { AuthorService } from "./author.service";
import { AuthorController } from "./author.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Author } from "./entities/author.entity";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [SequelizeModule.forFeature([Author]), JwtModule],

  controllers: [AuthorController],
  providers: [AuthorService],
  exports: [AuthorService],
})
export class AuthorModule {}
