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

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // GET /books Получить список всех книг
  @Get()
  async getAllBooks(): Promise<void> {
    //необходимо вызвать соответствующий метод сервиса и вернуть результат
    //const result = await this.booksService.getAllBooks();
    //return result;
  }

  // GET /books/:id Получить книгу по id
  @Get(':id')
  async getBookById(@Param('id') id: number): Promise<void> {
    //необходимо вызвать соответствующий метод сервиса и вернуть результат
    //const result = await this.booksService.getBookById(id);
    //return result;
  }

  // POST /books Создать новую книгу
  @Post()
  async createBook(@Body() book: any): Promise<void> {
    //необходимо вызвать соответствующий метод сервиса и вернуть результат
    //const result = await this.booksService.createBook(book);
    //return result;
  }
  // PUT /books/:id Обновить книгу по id
  @Put(':id')
  async updateBook(@Param('id') id: number, @Body() book: any): Promise<void> {
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
