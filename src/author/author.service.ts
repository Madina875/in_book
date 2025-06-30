import { Injectable } from "@nestjs/common";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Author } from "./entities/author.entity";

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author) private readonly authorModel: typeof Author
  ) {}

  create(createAuthorDto: CreateAuthorDto) {
    return this.authorModel.create(createAuthorDto);
  }

  findAll() {
    return this.authorModel.findAll();
  }

  findOne(id: number) {
    return this.authorModel.findByPk(id);
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return this.authorModel.destroy({ where: { id } });
  }
}
