import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['ID'];
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  author: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type BookInput = {
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  author: Scalars['String'];
  image?: Maybe<Scalars['Upload']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  createBook: Scalars['Boolean'];
};


export type MutationCreateBookArgs = {
  input: BookInput;
};

export type Query = {
  __typename?: 'Query';
  getBooks: Array<Book>;
  getBook?: Maybe<Book>;
};


export type QueryGetBooksArgs = {
  title?: Maybe<Scalars['String']>;
  cursor?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Float']>;
};


export type QueryGetBookArgs = {
  id: Scalars['String'];
};


export type CreateBookMutationVariables = Exact<{
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  author: Scalars['String'];
  image?: Maybe<Scalars['Upload']>;
}>;


export type CreateBookMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createBook'>
);

export type GetBookQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetBookQuery = (
  { __typename?: 'Query' }
  & { getBook?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'title' | 'subtitle' | 'description' | 'author' | 'image' | 'createdAt'>
  )> }
);

export type GetBooksQueryVariables = Exact<{
  cursor?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
}>;


export type GetBooksQuery = (
  { __typename?: 'Query' }
  & { getBooks: Array<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'title' | 'subtitle' | 'description' | 'author' | 'image' | 'createdAt'>
  )> }
);


export const CreateBookDocument = gql`
    mutation CreateBook($title: String!, $subtitle: String, $description: String!, $author: String!, $image: Upload) {
  createBook(
    input: {title: $title, subtitle: $subtitle, description: $description, author: $author, image: $image}
  )
}
    `;
export type CreateBookMutationFn = Apollo.MutationFunction<CreateBookMutation, CreateBookMutationVariables>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      title: // value for 'title'
 *      subtitle: // value for 'subtitle'
 *      description: // value for 'description'
 *      author: // value for 'author'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useCreateBookMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, options);
      }
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;
export const GetBookDocument = gql`
    query GetBook($id: String!) {
  getBook(id: $id) {
    id
    title
    subtitle
    description
    author
    image
    createdAt
  }
}
    `;

/**
 * __useGetBookQuery__
 *
 * To run a query within a React component, call `useGetBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBookQuery(baseOptions: Apollo.QueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
      }
export function useGetBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
        }
export type GetBookQueryHookResult = ReturnType<typeof useGetBookQuery>;
export type GetBookLazyQueryHookResult = ReturnType<typeof useGetBookLazyQuery>;
export type GetBookQueryResult = Apollo.QueryResult<GetBookQuery, GetBookQueryVariables>;
export const GetBooksDocument = gql`
    query GetBooks($cursor: String, $limit: Float, $title: String) {
  getBooks(cursor: $cursor, limit: $limit, title: $title) {
    id
    title
    subtitle
    description
    author
    image
    createdAt
  }
}
    `;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
      }
export function useGetBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksQueryResult = Apollo.QueryResult<GetBooksQuery, GetBooksQueryVariables>;