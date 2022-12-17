import express, { Express } from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema, buildSchema } from "graphql";
import http from "http";
import { myDataSource } from "./config/dbConfig";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./graphql/typeDef";
import { resolvers } from "./graphql/resolver";

const app = express();
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err: any) => {
    console.error("Error during Data Source initialization:", err);
  });

const executableSchema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: executableSchema,
    graphiql: true,
  })
);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App running on port ${port}`));
