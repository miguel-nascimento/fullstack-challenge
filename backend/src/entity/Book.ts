import { GraphQLUpload } from 'apollo-server-express'
import { FileUpload } from 'graphql-upload'
import {
    Field,
    GraphQLISODateTime,
    ID,
    InputType,
    ObjectType,
} from 'type-graphql'
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
} from 'typeorm'

interface IBook {
    title: string
    subtitle?: string
    description?: string
    author: string
    image?: string
}

@ObjectType()
@Entity()
export class Book extends BaseEntity implements IBook {
    @Field((_type) => ID)
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

@InputType('BookInput')
export class BookInput implements IBook {
    @Field()
    title: string

    @Field({ nullable: true })
    subtitle: string

    @Field()
    description: string

    @Field()
    author: string

    @Field((_type) => GraphQLUpload, { nullable: true })
    image: FileUpload
}
