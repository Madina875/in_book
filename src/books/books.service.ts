import { Injectable } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Book } from "./entities/book.entity";

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book) private readonly bookModel: typeof Book) {}
  create(createBookDto: CreateBookDto) {
    return this.bookModel.create(createBookDto);
  }

  findAll() {
    return this.bookModel.findAll();
  }

  findOne(id: number) {
    return this.bookModel.findByPk(id);
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const book = await this.bookModel.update(updateBookDto, {
      where: { id },
      returning: true,
    });
    return book[1][0];
  }

  async remove(id: number) {
    const res = await this.bookModel.destroy({ where: { id } });
    if (res > 0) {
      return { message: "book deleted successfully" };
    }
    return { message: "book  not found" };
  }
}
