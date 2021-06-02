import { FileUpload } from 'graphql-upload'
import { GraphQLUpload } from 'apollo-server-express'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Book, BookInput } from '../entity/Book'
import { createWriteStream } from 'fs'
import { v4 as uuidv4 } from 'uuid'
import * as path from 'path'

@Resolver()
export class BookResolver {
    @Query(() => [Book])
    async getBooks() {
        return await Book.find()
    }

    @Query(() => Book, { nullable: true })
    async getBook(@Arg('id') id: string): Promise<Book | undefined> {
        return await Book.findOne(id)
    }

    @Mutation(() => Boolean)
    async createBook(
        @Arg('input') input: BookInput,
        @Arg('file', () => GraphQLUpload, { nullable: true })
        { createReadStream, filename }: FileUpload
    ): Promise<Boolean> {
        const hashed_name = `${uuidv4()}-${filename}`
        return new Promise(async (resolve, reject) =>
            createReadStream()
                .pipe(
                    createWriteStream(
                        path.join(
                            __dirname,
                            '..',
                            '..',
                            'uploads',
                            `${hashed_name}`
                        )
                    )
                )
                .on('finish', () => {
                    Book.create({ ...input, image: hashed_name }).save()
                    resolve(true)
                })
                .on('error', () => reject(false))
        )
    }
}
