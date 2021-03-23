import postsResolvers from "./posts";
import usersResolvers from "./users";

const resolvers = {
  Query: {
    ...postsResolvers.Query,
  },
};

export default resolvers;
