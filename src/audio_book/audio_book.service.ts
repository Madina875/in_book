import { Injectable } from "@nestjs/common";
import { CreateAudioBookDto } from "./dto/create-audio_book.dto";
import { UpdateAudioBookDto } from "./dto/update-audio_book.dto";
import { InjectModel } from "@nestjs/sequelize";
import { AudioBook } from "./entities/audio_book.entity";

@Injectable()
export class AudioBookService {
  constructor(
    @InjectModel(AudioBook) private readonly audioBookModel: typeof AudioBook
  ) {}
  create(createAudioBookDto: CreateAudioBookDto) {
    return this.audioBookModel.create(createAudioBookDto);
  }

  findAll() {
    return this.audioBookModel.findAll();
  }

  findOne(id: number) {
    return this.audioBookModel.findByPk(id);
  }

  async update(id: number, updateAudioBookDto: UpdateAudioBookDto) {
    const audio = await this.audioBookModel.update(updateAudioBookDto, {
      where: { id },
      returning: true,
    });
    return audio[1][0];
  }

  async remove(id: number) {
    const result = await this.audioBookModel.destroy({ where: { id } });
    if (result > 0) {
      return { message: "audio book deleted successsfully" };
    }
    return { message: "audio book not found" };
  }
}
