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
import { BookVersionService } from "./book_version.service";
import { CreateBookVersionDto } from "./dto/create-book_version.dto";
import { UpdateBookVersionDto } from "./dto/update-book_version.dto";
import { JwtAdminAuthGuard } from "../common/guards/admin.guard";
import { JwtUserAuthGuard } from "../common/guards/user.guard";

@Controller("book-version")
export class BookVersionController {
  constructor(private readonly bookVersionService: BookVersionService) {}

  @UseGuards(JwtAdminAuthGuard)
  @Post()
  create(@Body() createBookVersionDto: CreateBookVersionDto) {
    return this.bookVersionService.create(createBookVersionDto);
  }

  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Get()
  findAll() {
    return this.bookVersionService.findAll();
  }

  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.bookVersionService.findOne(+id);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateBookVersionDto: UpdateBookVersionDto
  ) {
    return this.bookVersionService.update(+id, updateBookVersionDto);
  }
  @UseGuards(JwtAdminAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.bookVersionService.remove(+id);
  }
}
