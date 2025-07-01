import { Injectable } from "@nestjs/common";
import { CreateAudioPartDto } from "./dto/create-audio_part.dto";
import { UpdateAudioPartDto } from "./dto/update-audio_part.dto";
import { InjectModel } from "@nestjs/sequelize";
import { AudioPart } from "./entities/audio_part.entity";

@Injectable()
export class AudioPartsService {
  constructor(
    @InjectModel(AudioPart) private readonly audioPartModel: typeof AudioPart
  ) {}
  create(createAudioPartDto: CreateAudioPartDto) {
    return this.audioPartModel.create(createAudioPartDto);
  }

  findAll() {
    return this.audioPartModel.findAll();
  }

  findOne(id: number) {
    return this.audioPartModel.findByPk(id);
  }

  async update(id: number, updateAudioPartDto: UpdateAudioPartDto) {
    const audio = await this.audioPartModel.update(updateAudioPartDto, {
      where: { id },
      returning: true,
    });
    return audio[1][0];
  }

  async remove(id: number) {
    const res = await this.audioPartModel.destroy({ where: { id } });
    if (res > 0) {
      return { message: "audio part delted successfully" };
    }
    return { message: "with this id not found " };
  }
}
