import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../core/entity/base.entity';

@Entity('books')
export class Book extends BaseEntity {
  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  ageRestriction: number;

  @Column()
  ownerId: number; //id of the user who owns the book

  @Column({ nullable: true })
  image?: string;
}
