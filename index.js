const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => "Hello World",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

mongoose
  .connect(
    `mongodb+srv://Nave18:${process.env.MONGODB}@devsocialnetwork.9klrg.mongodb.net/GraphqlNetwork?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server started at ${res.url}`);
  });
