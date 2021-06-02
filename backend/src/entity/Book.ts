import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    title: string

    @Column({ nullable: true })
    subtitle?: string

    @Column()
    description: string

    @Column()
    author: string

    @Column({ nullable: true })
    image?: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
