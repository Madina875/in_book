import { Module } from "@nestjs/common";
import { CollectionService } from "./collection.service";
import { CollectionController } from "./collection.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Collection } from "./entities/collection.entity";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [SequelizeModule.forFeature([Collection]), JwtModule],
  controllers: [CollectionController],
  providers: [CollectionService],
})
export class CollectionModule {}
