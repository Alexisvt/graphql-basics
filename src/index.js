import { ApolloServer, gql } from 'apollo-server';

// Type Definitions (schema)
const typeDefs = gql`
  type Query {
    hola: String!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    hola() {
      return 'My first query';
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
