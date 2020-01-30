import { ApolloServer, gql } from 'apollo-server';

// Type Definitions (schema)
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }

  type Query {
    me: User!
    post: Post!
    add(a: Float!, b: Float!): Float!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    me() {
      return {
        id: '123456',
        name: 'Alexis',
        email: 'alexisvt@gmail.com',
        age: null,
      };
    },
    post() {
      return {
        id: 'BH56ZSBM096950363U9005',
        title: 'Legacy Quality Agent',
        body:
          'Est reprehenderit minim adipisicing dolore eiusmod labore. Anim eiusmod incididunt ut laboris deserunt aute. Cupidatat elit deserunt occaecat nisi id aute sint. Cillum excepteur anim aute irure. Est deserunt anim sint ad in labore enim minim deserunt. Voluptate anim esse amet excepteur.',
        published: true,
      };
    },
    add(parent, { a, b }, context, info) {
      return a + b;
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
