import { Field, ID, InputType, ObjectType } from 'type-graphql'
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
    @Field((type) => ID)
    @PrimaryGeneratedColumn('uuid')
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

    @Field()
    @CreateDateColumn()
    createdAt: Date

    @Field()
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

    @Field({ nullable: true })
    image: string
}
