import { Injectable } from "@nestjs/common";
import { CreateBookCollectionDto } from "./dto/create-book_collection.dto";
import { UpdateBookCollectionDto } from "./dto/update-book_collection.dto";
import { InjectModel } from "@nestjs/sequelize";
import { BookCollection } from "./entities/book_collection.entity";

@Injectable()
export class BookCollectionService {
  constructor(
    @InjectModel(BookCollection)
    private readonly bookCollectionModdel: typeof BookCollection
  ) {}
  create(createBookCollectionDto: CreateBookCollectionDto) {
    return this.bookCollectionModdel.create(createBookCollectionDto);
  }

  findAll() {
    return this.bookCollectionModdel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} bookCollection`;
  }

  update(id: number, updateBookCollectionDto: UpdateBookCollectionDto) {
    return `This action updates a #${id} bookCollection`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookCollection`;
  }
}
