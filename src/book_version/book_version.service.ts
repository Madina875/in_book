import { Injectable } from "@nestjs/common";
import { CreateBookVersionDto } from "./dto/create-book_version.dto";
import { UpdateBookVersionDto } from "./dto/update-book_version.dto";
import { InjectModel } from "@nestjs/sequelize";
import { BookVersion } from "./entities/book_version.entity";

@Injectable()
export class BookVersionService {
  constructor(
    @InjectModel(BookVersion)
    private readonly bookVersionModel: typeof BookVersion
  ) {}
  create(createBookVersionDto: CreateBookVersionDto) {
    return this.bookVersionModel.create(createBookVersionDto);
  }

  findAll() {
    return this.bookVersionModel.findAll();
  }

  findOne(id: number) {
    return this.bookVersionModel.findByPk(id);
  }

  async update(id: number, updateBookVersionDto: UpdateBookVersionDto) {
    const book_v = await this.bookVersionModel.update(updateBookVersionDto, {
      where: { id },
      returning: true,
    });
    return book_v[1][0];
  }

  async remove(id: number) {
    const result = await this.bookVersionModel.destroy({
      where: { id },
    });

    if (result > 0) {
      return { message: "delted successfully" };
    }
    return { message: "not found" };
  }
}
