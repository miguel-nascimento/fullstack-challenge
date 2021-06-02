import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql'
import { Book, BookInput } from '../entity/Book'

@Resolver()
export class BookResolver {
    @Query(() => [Book])
    async books() {
        return await Book.find()
    }

    @Query(() => Book, { nullable: true })
    async book(@Arg('id') id: string): Promise<Book | undefined> {
        return await Book.findOne(id)
    }

    @Mutation(() => Book)
    async createBook(@Arg('bookInput') bookInput: BookInput) {
        return await Book.create(bookInput).save()
    }
}
