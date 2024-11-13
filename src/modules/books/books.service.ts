import { ForbiddenException, Injectable } from '@nestjs/common';
import { BooksRepository } from './books.repository';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UsersRepository } from '../users/users.repository';

@Injectable()
export class BooksService {
  constructor(
    private readonly booksRepository: BooksRepository,
    private userRepo: UsersRepository,
  ) {}

  //получить список всех книг
  async getAllBooks(): Promise<Book[]> {
    return await this.booksRepository.findAll();
  }

  //получить книгу по id
  async getBookById(id: number): Promise<Book> {
    return await this.booksRepository.findOneOrNotFound(id);
  }

  //создать новую книгу
  async createBook(dto: CreateBookDto, userId: number): Promise<void> {
    const user = await this.userRepo.findByIdOrNotFoundFail(userId);

    if (user.age < 18 && dto.ageRestriction >= 18) {
      throw new ForbiddenException('You are too young to read this book');
    }

    const book: Book = new Book();
    book.title = dto.title;
    book.ageRestriction = dto.ageRestriction;
    book.author = dto.author;
    book.ownerId = user.id;

    await this.booksRepository.save(book);
  }
}
