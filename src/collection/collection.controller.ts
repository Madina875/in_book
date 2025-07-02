import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { CollectionService } from "./collection.service";
import { CreateCollectionDto } from "./dto/create-collection.dto";
import { UpdateCollectionDto } from "./dto/update-collection.dto";
import { JwtAdminAuthGuard } from "../common/guards/admin.guard";
import { JwtUserAuthGuard } from "../common/guards/user.guard";
import { JwtUserSelfGuard } from "../common/guards/jwt-self.guard";

@Controller("collection")
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @UseGuards(JwtAdminAuthGuard)
  @Post()
  create(@Body() createCollectionDto: CreateCollectionDto) {
    return this.collectionService.create(createCollectionDto);
  }

  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Get()
  findAll() {
    return this.collectionService.findAll();
  }

  @UseGuards(JwtAdminAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.collectionService.findOne(+id);
  }
  @UseGuards(JwtAdminAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCollectionDto: UpdateCollectionDto
  ) {
    return this.collectionService.update(+id, updateCollectionDto);
  }
  @UseGuards(JwtAdminAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.collectionService.remove(+id);
  }
}
