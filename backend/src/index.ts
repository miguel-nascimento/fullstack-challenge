import 'reflect-metadata'
import express from 'express'
import { BookResolver } from './resolvers/book'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import * as path from 'path'
import { createConnection } from 'typeorm'

const PORT = 42069
const main = async () => {
    const db = await createConnection()
    const app = express()

    const apollo = new ApolloServer({
        schema: await buildSchema({
            resolvers: [BookResolver],
            validate: false,
        }),
    })

    app.use('/static', express.static(path.resolve(__dirname, '..', 'uploads')))
    apollo.applyMiddleware({ app })
    app.listen(PORT, () => {
        console.log(`Express file serving running in http://localhost:${PORT}`)
        console.log(`GraphQL playground in http://localhost:${PORT}/graphql`)
    })
}

main().catch(console.error)
