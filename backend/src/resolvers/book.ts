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
    async getBooks(
        @Arg('limit') limit: number,
        @Arg('cursor', () => String, { nullable: true }) cursor: string | null
    ) {
        let pageLimit = Math.min(50, limit)
        const queryBuilder = Book.createQueryBuilder()
            .orderBy('"createdAt"', 'DESC')
            .take(pageLimit)

        if (cursor) {
            queryBuilder.where(`"createdAt" > datetime('${cursor}')`)
        }
        return queryBuilder.getMany()
    }

    @Query(() => Book, { nullable: true })
    async getBook(@Arg('id') id: string): Promise<Book | undefined> {
        return await Book.findOne(id)
    }

    @Mutation(() => Boolean)
    async createBook(@Arg('input') input: BookInput) {
        if (input.image) {
            const hashed_name = `${uuidv4()}-${input.image.file.filename}`
            return new Promise(async (resolve, reject) =>
                input.image.file
                    .createReadStream()
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
        await Book.create(input).save()
        return true
    }
}
