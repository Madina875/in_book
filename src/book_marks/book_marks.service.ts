import { Injectable } from "@nestjs/common";
import { CreateBookMarkDto } from "./dto/create-book_mark.dto";
import { UpdateBookMarkDto } from "./dto/update-book_mark.dto";
import { InjectModel } from "@nestjs/sequelize";
import { BookMark } from "./entities/book_mark.entity";

@Injectable()
export class BookMarksService {
  constructor(
    @InjectModel(BookMark) private readonly bookmarkModel: typeof BookMark
  ) {}

  create(createBookMarkDto: CreateBookMarkDto) {
    return this.bookmarkModel.create(createBookMarkDto);
  }

  findAll() {
    return this.bookmarkModel.findAll();
  }

  findOne(id: number) {
    return this.bookmarkModel.findByPk(id);
  }

  async update(id: number, updateBookMarkDto: UpdateBookMarkDto) {
    const m = await this.bookmarkModel.update(updateBookMarkDto, {
      where: { id },
      returning: true,
    });
    return m[1][0];
  }

  async remove(id: number) {
    const r = await this.bookmarkModel.destroy({ where: { id } });
    if (r > 0) {
      return { message: "deleted" };
    }
    return { message: "not found" };
  }
}
