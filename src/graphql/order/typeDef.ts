export const orderTypeDefs = /* GraphQL */ `
  type Author {
    id: ID! # the ! means that every author object _must_ have an id
    firstName: String
    lastName: String
  }

  # the schema allows the following query:
  type Query {
    posts: String
  }

  # this schema allows the following mutation:
  type Mutation {
    upvotePost(postId: ID!): String
  }

  # we need to tell the server which types represent the root query
  # and root mutation types. We call them RootQuery and RootMutation by convention.
  schema {
    query: Query
    mutation: Mutation
  }
`;
