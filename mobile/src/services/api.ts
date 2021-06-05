import ApolloClient from "apollo-client";

const PORT = process.env.PORT;

const client = new ApolloClient({
  uri: "localhost:{PORT}/graphql",
  cache: new InMemoryCache(),
});
