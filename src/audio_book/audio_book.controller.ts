import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { AudioBookService } from "./audio_book.service";
import { CreateAudioBookDto } from "./dto/create-audio_book.dto";
import { UpdateAudioBookDto } from "./dto/update-audio_book.dto";
import { JwtAdminAuthGuard } from "../common/guards/admin.guard";
import { JwtUserAuthGuard } from "../common/guards/user.guard";

@Controller("audio-book")
export class AudioBookController {
  constructor(private readonly audioBookService: AudioBookService) {}

  @UseGuards(JwtAdminAuthGuard)
  @Post()
  create(@Body() createAudioBookDto: CreateAudioBookDto) {
    return this.audioBookService.create(createAudioBookDto);
  }

  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Get()
  findAll() {
    return this.audioBookService.findAll();
  }

  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.audioBookService.findOne(+id);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateAudioBookDto: UpdateAudioBookDto
  ) {
    return this.audioBookService.update(+id, updateAudioBookDto);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.audioBookService.remove(+id);
  }
}
