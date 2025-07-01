import { Injectable } from "@nestjs/common";
import { CreateLanguageDto } from "./dto/create-language.dto";
import { UpdateLanguageDto } from "./dto/update-language.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Language } from "./entities/language.entity";

@Injectable()
export class LanguageService {
  constructor(
    @InjectModel(Language) private readonly languageModel: typeof Language
  ) {}

  create(createLanguageDto: CreateLanguageDto) {
    return this.languageModel.create(createLanguageDto);
  }

  findAll() {
    return this.languageModel.findAll();
  }

  findOne(id: number) {
    return this.languageModel.findByPk(id);
  }

  async update(id: number, updateLanguageDto: UpdateLanguageDto) {
    const lang = await this.languageModel.update(updateLanguageDto, {
      where: { id },
      returning: true,
    });
    return lang[1][0];
  }

  async remove(id: number) {
    const r = await this.languageModel.destroy({ where: { id } });
    if (r > 0) {
      return { message: "deleted successfully" };
    }
    return { message: "language not found" };
  }
}
