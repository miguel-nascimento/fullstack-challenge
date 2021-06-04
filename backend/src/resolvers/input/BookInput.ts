import { Field, InputType } from 'type-graphql'
import { GraphQLUpload } from 'apollo-server-express'
import { FileUpload } from 'graphql-upload'
import IBook from '../../models/interfaces/IBook'

@InputType('BookInput')
class BookInput implements IBook {
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

export default BookInput
