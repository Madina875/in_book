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
import { BookMarksService } from "./book_marks.service";
import { CreateBookMarkDto } from "./dto/create-book_mark.dto";
import { UpdateBookMarkDto } from "./dto/update-book_mark.dto";
import { JwtUserAuthGuard } from "../common/guards/user.guard";
import { JwtAdminAuthGuard } from "../common/guards/admin.guard";
import { JwtUserSelfGuard } from "../common/guards/jwt-self.guard";

@Controller("book-marks")
export class BookMarksController {
  constructor(private readonly bookMarksService: BookMarksService) {}

  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Post()
  create(@Body() createBookMarkDto: CreateBookMarkDto) {
    return this.bookMarksService.create(createBookMarkDto);
  }

  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Get()
  findAll() {
    return this.bookMarksService.findAll();
  }

  @UseGuards(JwtUserSelfGuard)
  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.bookMarksService.findOne(+id);
  }

  @UseGuards(JwtUserSelfGuard)
  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateBookMarkDto: UpdateBookMarkDto
  ) {
    return this.bookMarksService.update(+id, updateBookMarkDto);
  }

  @UseGuards(JwtUserSelfGuard)
  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.bookMarksService.remove(+id);
  }
}
