import { Injectable } from '@nestjs/common';
import { BooksRepository } from './books.repository';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(private readonly booksRepository: BooksRepository) {}

  //получить список всех книг
  async getAllBooks(): Promise<Book[]> {
    return await this.booksRepository.findAll();
  }

  //получить книгу по id
  async getBookById(id: number): Promise<Book> {
    return await this.booksRepository.findOneOrNotFound(id);
  }

  //создать новую книгу
  async createBook(dto: CreateBookDto): Promise<void> {
    const book: Book = new Book();
    book.title = dto.title;
    book.ageRestriction = dto.ageRestriction;
    book.author = dto.author;

    await this.booksRepository.save(book);
  }
}
