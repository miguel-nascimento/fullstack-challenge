import 'reflect-metadata'
import * as dotenv from 'dotenv'
import * as path from 'path'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import { BookResolver } from './resolvers/book'

dotenv.config({ path: path.join(__dirname, '..', '..', '.env') })
const API_PORT = process.env.API_PORT

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
    app.listen(process.env.API_PORT, () => {
        console.log(
            `Express file serving running in http://localhost:${API_PORT}`
        )
        console.log(
            `GraphQL playground in http://localhost:${API_PORT}/graphql`
        )
    })
}

main().catch(console.error)
