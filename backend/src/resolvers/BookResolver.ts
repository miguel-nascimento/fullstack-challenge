import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { createReadStream, createWriteStream } from 'fs'
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
      const imageUrl = await this.processUpload(input.image)
      Book.create({ ...input, image: imageUrl }).save()
    }
    Book.create(input).save()
    return true
  }

  processUpload = async (upload) => {
    const { createReadStream, filename } = await upload
    const stream = createReadStream()
    const hashedName = `${uuidv4()}-${filename}`
    const { path } = await this.storeUpload({ stream, filename: hashedName })
    return path
  }

  storeUpload = async ({ stream, filename }): Promise<{ path: string }> => {
    const filepath = path.join(__dirname, '..', '..', 'uploads', `${filename}`)

    return new Promise((resolve, reject) =>
      stream
        .pipe(createWriteStream(filename))
        .on('finish', () => resolve({ path: filepath }))
        .on('error', reject)
    )
  }
}

export default BookResolver
