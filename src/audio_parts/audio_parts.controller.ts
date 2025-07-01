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
import { AudioPartsService } from "./audio_parts.service";
import { CreateAudioPartDto } from "./dto/create-audio_part.dto";
import { UpdateAudioPartDto } from "./dto/update-audio_part.dto";
import { JwtAdminAuthGuard } from "../common/guards/admin.guard";
import { JwtUserAuthGuard } from "../common/guards/user.guard";

@Controller("audio-parts")
export class AudioPartsController {
  constructor(private readonly audioPartsService: AudioPartsService) {}

  @UseGuards(JwtAdminAuthGuard)
  @Post()
  create(@Body() createAudioPartDto: CreateAudioPartDto) {
    return this.audioPartsService.create(createAudioPartDto);
  }

  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Get()
  findAll() {
    return this.audioPartsService.findAll();
  }

  @UseGuards(JwtAdminAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.audioPartsService.findOne(+id);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateAudioPartDto: UpdateAudioPartDto
  ) {
    return this.audioPartsService.update(+id, updateAudioPartDto);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.audioPartsService.remove(+id);
  }
}
