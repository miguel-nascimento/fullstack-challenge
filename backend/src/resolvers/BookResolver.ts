import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { createWriteStream } from 'fs'
import { v4 as uuidv4 } from 'uuid'
import * as path from 'path'
import Book from '../models/entity/Book'
import BookInput from './input/BookInput'

@Resolver()
class BookResolver {
  @Query(() => [Book])
  async getBooks(
    @Arg('limit', { nullable: true }) limit: number = 9,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null,
    @Arg('title', { nullable: true }) title: string | null
  ): Promise<Book[] | undefined> {
    const pageLimit = Math.min(50, limit)
    const queryBuilder = Book.createQueryBuilder()
      .orderBy('"createdAt"', 'DESC')
      .take(pageLimit)

    if (cursor) {
      queryBuilder.where(`"createdAt" < datetime('${cursor}')`)
    }
    if (title) {
      queryBuilder.where(`"title" like '%${title}'`)
    }
    return queryBuilder.getMany()
  }

  @Query(() => Book, { nullable: true })
  getBook(@Arg('id') id: string): Promise<Book | undefined> {
    return Book.findOne(id)
  }

  @Mutation(() => Boolean)
  async createBook(
    @Arg('input') input: BookInput
  ): Promise<boolean | undefined> {
    console.log(input.image)
    if (input.image) {
      const hashedName = `${uuidv4()}-${input.image.file.filename}`
      return new Promise((resolve, reject) =>
        input.image.file
          .createReadStream()
          .pipe(
            createWriteStream(
              path.join(__dirname, '..', '..', 'uploads', `${hashedName}`)
            )
          )
          .on('finish', () => {
            Book.create({ ...input, image: hashedName }).save()
            resolve(true)
          })
          .on('error', () =>
            reject(new Error('oops, error in image uploading'))
          )
      )
    }
    Book.create(input).save()
    return true
  }
}

export default BookResolver
