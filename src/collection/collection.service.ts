import { Injectable } from "@nestjs/common";
import { CreateCollectionDto } from "./dto/create-collection.dto";
import { UpdateCollectionDto } from "./dto/update-collection.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Collection } from "./entities/collection.entity";

@Injectable()
export class CollectionService {
  constructor(
    @InjectModel(Collection) private readonly collectionModel: typeof Collection
  ) {}
  create(createCollectionDto: CreateCollectionDto) {
    return this.collectionModel.create(createCollectionDto);
  }

  findAll() {
    return this.collectionModel.findAll();
  }

  findOne(id: number) {
    return this.collectionModel.findByPk();
  }

  async update(id: number, updateCollectionDto: UpdateCollectionDto) {
    const c = await this.collectionModel.update(updateCollectionDto, {
      where: { id },
      returning: true,
    });
    return c[1][0];
  }

  async remove(id: number) {
    const r = await this.collectionModel.destroy({ where: { id } });
    if (r > 0) {
      return { message: "deleted successfully" };
    }
    return { message: "not found" };
  }
}
