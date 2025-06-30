import { Injectable } from "@nestjs/common";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Genre } from "./entities/genre.entity";

@Injectable()
export class GenreService {
  constructor(@InjectModel(Genre) private readonly genreModel: typeof Genre) {}

  create(createGenreDto: CreateGenreDto) {
    return this.genreModel.create(createGenreDto);
  }

  findAll() {
    return this.genreModel.findAll();
  }

  findOne(id: number) {
    return this.genreModel.findByPk(id);
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    return `This action updates a #${id} genre`;
  }

  remove(id: number) {
    return `This action removes a #${id} genre`;
  }
}
