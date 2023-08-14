// const express = require("express");
import { ApolloServer } from "@apollo/server";
import { gql } from "apollo-server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";

const __dirname = path.resolve();

const typeDefs = gql`
  # This "Project" type defines the queryable fields: 'title' and 'author'.
  type Project {
    company: String
    projectDescription: [String]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "projects" query returns an array of zero or more Projects (defined above).
  type Query {
    projects: [Project]
  }
`;

const projects = [
  {
    id: 1,
    company: "Hudl",
    projectDescription: [
      "Organization profile, a reactJS landing page for complex video data.",
      "Automated video exchange by creating a schedule matching service",
    ],
  },
  {
    id: 2,
    company: "Firespring",
    projectDescription: [
      "Organization profile, a reactJS landing page for complex video data.",
      "Automated video exchange by creating a schedule matching service",
    ],
  },
  {
    id: 3,
    company: "NE State Patrol",
    projectDescription: [
      "Organization profile, a reactJS landing page for complex video data.",
      "Automated video exchange by creating a schedule matching service",
    ],
  },
  {
    id: 4,
    company: "Hospitality",
    projectDescription: [
      "Organization profile, a reactJS landing page for complex video data.",
      "Automated video exchange by creating a schedule matching service",
    ],
  },
];

const resolvers = {
  Query: {
    projects: () => projects,
  },
};

// Required logic for integrating with Express
const app = express();
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
// Ensure we wait for our server to start
await server.start();

// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  express.static(path.resolve(__dirname, "./client/build")),
  // expressMiddleware accepts the same arguments:
  // an Apollo Server instance and optional configuration options
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

// // Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "./client/build/index.html"));
});

// Modified server startup
await new Promise((resolve) =>
  httpServer.listen({ port: process.env.PORT || 4000 }, resolve)
);

console.log(`🚀 Server ready at http://localhost:4000/`, process.env.PORT);
// app.use(express.static(path.join(__dirname, "client/build")));

// const server = new ApolloServer({ typeDefs, resolvers });
// const app = express();

// await server.start();

// server.applyMiddleware({ app });

// app.listen({ port: 4000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// );

// server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });

// const port = process.env.PORT || 4000;
// app.listen(port);

// console.log("App is listening on port " + port);

// HELPFUL NOTES
// https://code.visualstudio.com/docs/nodejs/nodejs-debugging
// https://www.apollographql.com/blog/graphql/examples/building-a-graphql-api/
