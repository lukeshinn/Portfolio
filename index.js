const express = require("express");
const path = require("path");
var db = require("./database.js");

var md5 = require("md5");

var bodyParser = require("body-parser");

const app = express();

const { ApolloServer, gql } = require("apollo-server");

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

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves projects from the "books" array above.
const resolvers = {
  Query: {
    projects: () => projects,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// https://www.apollographql.com/blog/graphql/examples/building-a-graphql-api/

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// const port = process.env.PORT || 4000;
// app.listen(port);

// console.log("App is listening on port " + port);

// HELPFUL NOTES
// https://code.visualstudio.com/docs/nodejs/nodejs-debugging
