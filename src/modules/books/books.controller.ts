import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // GET /books Получить список всех книг
  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.booksService.getAllBooks();
  }

  // GET /books/:id Получить книгу по id
  @Get(':id')
  async getBookById(@Param('id') id: number): Promise<Book> {
    return this.booksService.getBookById(id);
  }

  // POST /books Создать новую книгу
  @Post()
  @HttpCode(201)
  async createBook(@Body() bookDto: CreateBookDto): Promise<void> {
    return this.booksService.createBook(bookDto);
  }
  // PUT /books/:id Обновить книгу по id
  @Put(':id')
  async updateBook(
    @Param('id') id: number,
    @Body() bookDto: UpdateBookDto): Promise<void> {
    //необходимо вызвать соответствующий метод сервиса и вернуть результат
    //const result = await this.booksService.updateBook(id, book);
    //return result;
  }

  // DELETE /books/:id Удалить книгу по id
  @Delete(':id')
  async deleteBook(@Param('id') id: number): Promise<void> {
    //необходимо вызвать соответствующий метод сервиса и вернуть результат
    //const result = await this.booksService.deleteBook(id);
    //return result;
  }
}
