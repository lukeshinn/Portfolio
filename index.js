const express = require("express");
const path = require("path");
var db = require("./database.js");
const http = require("http");

var md5 = require("md5");

var bodyParser = require("body-parser");

const { ApolloServer, gql } = require("apollo-server-express");

const app = express();

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

let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();

const httpserver = http.createServer(app);

// The `listen` method launches a web server.
// app.listen(4000).then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });

app.listen(process.env.PORT, function () {
  console.log(`server running on port 4000`);
  console.log(`gql path is ${apolloServer.graphqlPath}`);
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// HELPFUL NOTES
// https://code.visualstudio.com/docs/nodejs/nodejs-debugging
// https://www.apollographql.com/blog/graphql/examples/building-a-graphql-api/
