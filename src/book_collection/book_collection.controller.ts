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
import { BookCollectionService } from "./book_collection.service";
import { CreateBookCollectionDto } from "./dto/create-book_collection.dto";
import { UpdateBookCollectionDto } from "./dto/update-book_collection.dto";
import { JwtAdminAuthGuard } from "../common/guards/admin.guard";
import { JwtUserAuthGuard } from "../common/guards/user.guard";
import { JwtUserSelfGuard } from "../common/guards/jwt-self.guard";

@Controller("book-collection")
export class BookCollectionController {
  constructor(private readonly bookCollectionService: BookCollectionService) {}

  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Post()
  create(@Body() createBookCollectionDto: CreateBookCollectionDto) {
    return this.bookCollectionService.create(createBookCollectionDto);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Get()
  findAll() {
    return this.bookCollectionService.findAll();
  }

  @UseGuards(JwtUserSelfGuard)
  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.bookCollectionService.findOne(+id);
  }

  @UseGuards(JwtUserSelfGuard)
  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateBookCollectionDto: UpdateBookCollectionDto
  ) {
    return this.bookCollectionService.update(+id, updateBookCollectionDto);
  }

  @UseGuards(JwtUserSelfGuard)
  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.bookCollectionService.remove(+id);
  }
}
