import { Field, GraphQLISODateTime, ID, ObjectType } from 'type-graphql'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm'
import IBook from '../interfaces/IBook'
import IEntity from '../interfaces/IEntity'

@ObjectType()
@Entity()
class Book extends BaseEntity implements IBook, IEntity {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  readonly id: string

  @Field()
  @Column()
  title: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  subtitle?: string

  @Field()
  @Column()
  description: string

  @Field()
  @Column()
  author: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  image?: string

  @Field((type) => GraphQLISODateTime)
  @CreateDateColumn()
  createdAt: Date

  @Field((type) => GraphQLISODateTime)
  @UpdateDateColumn()
  updatedAt: Date
}

export default Book
