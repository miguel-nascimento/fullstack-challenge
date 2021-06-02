import express, { response } from 'express'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Book } from './entity/Book'

const main = async () => {
    const db = await createConnection()
    const app = express()

    const bookRepository = db.getRepository(Book)
    await bookRepository.save({
        author: 'Miguel',
        description: 'a good book huh?',
        title: 'TODO',
        subtitle: 'create a better name',
    })
    const books = await bookRepository.find()
    console.log(books)

    app.get('/', (_, res) => {
        res.send(books)
    })

    app.listen(4000, () => {
        console.log('>> Server started in http://localhost:4000')
    })
}

main().catch(console.error)
