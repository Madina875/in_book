import { PartialType } from '@nestjs/swagger';
import { CreateBookMarkDto } from './create-book_mark.dto';

export class UpdateBookMarkDto extends PartialType(CreateBookMarkDto) {}
