import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
    type Query {
      add(a: Int, b: Int): Int!
      greeting(name: String, position: String): String!
      me: User!
      post: Post!
    }
    
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
`;

const resolvers = {
  Query: {
    add(parent, args, ctx, info) {
      return args.a + args.b;
    },
    greeting(parent, args, ctx, info) {
      if (args.name && args.position) {
        return `Hello, ${args.name}! You are my favorite ${args.position}.`;
      } else {
        return "Hello!";
      }
    },
    me() {
      return {
        id: "1234932",
        name: "BearCola",
        email: "diablo1031@naver.com",
        age: 36
      };
    },
    post() {
      return {
        id: "324222",
        title: "BearCola Post",
        body: "BearCola Content",
        published: true
      };
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log("The server is up!");
});
