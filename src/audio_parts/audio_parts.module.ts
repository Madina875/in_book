import { Module } from "@nestjs/common";
import { AudioPartsService } from "./audio_parts.service";
import { AudioPartsController } from "./audio_parts.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { AudioPart } from "./entities/audio_part.entity";
import { AudioBook } from "../audio_book/entities/audio_book.entity";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [SequelizeModule.forFeature([AudioPart, AudioBook]), JwtModule],
  controllers: [AudioPartsController],
  providers: [AudioPartsService],
})
export class AudioPartsModule {}
