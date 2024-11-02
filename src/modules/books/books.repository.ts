import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksRepository {
  constructor(
    @InjectRepository(Book)
    private readonly booksORMRepository: Repository<Book>,
  ) {}

  async save(book: Book): Promise<Book> {
    return await this.booksORMRepository.save(book);
  }

  async findAll(): Promise<Book[]> {
    return await this.booksORMRepository.find();
  }

  async findOneOrNotFound(id: number): Promise<Book> {
    const result: Book | null = await this.booksORMRepository.findOne({
      where: { id },
    });
    if (!result) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return result;
  }
}
