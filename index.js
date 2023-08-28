import { ApolloServer } from '@apollo/server';
import { gql } from 'apollo-server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

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
    company: 'Hudl',
    projectDescription: [
      'Organization profile, a reactJS landing page for complex video data.',
      'Automated video exchange by creating a schedule matching service.',
    ],
  },
  {
    id: 2,
    company: 'Firespring',
    projectDescription: [
      'Developed customer specific customizable websites for 10+ enterprise clients.',
      'Led collaboration towards a unified styles framework to be used interanlly. This was component based scheme which sped up development for our internal squads.',
    ],
  },
  {
    id: 3,
    company: 'NE State Patrol',
    projectDescription: [
      'Built a product to serve private government data to internal teams.',
      'Assisted in developing a system to educate sworn officers on new technology and improvements coming from the IT team.',
    ],
  },
  {
    id: 4,
    company: 'Hospitality',
    projectDescription: [
      'Managed over 1 Million in sales the first fiscal year.',
      'Developed marketing strategy and integrated designs and branding throughout 3 separate brick and mortar ventures.',
      'Lead internal teams on company vision and closely kept culture principles.',
    ],
  },
];

const resolvers = {
  Query: {
    projects: () => projects,
  },
};

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  introspection: true,
});
await server.start();

app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

app.use('/static', express.static(path.join(__dirname, 'client/build/static')));

await new Promise((resolve) =>
  httpServer.listen({ port: process.env.PORT || 4000 }, resolve)
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

console.log(`🚀 Server ready at http://localhost:4000/`, process.env.PORT);

// HELPFUL NOTES
// https://code.visualstudio.com/docs/nodejs/nodejs-debugging
// https://www.apollographql.com/blog/graphql/examples/building-a-graphql-api/
// https://expressjs.com/en/starter/static-files.html
// https://stackoverflow.com/questions/38743275/express-js-unexpected-token
// https://stackoverflow.com/questions/34105183/uncaught-syntaxerror-unexpected-token-in-node-js
// https://stackoverflow.com/questions/58090054/express-and-webpack-problem-uncaught-syntaxerror-unexpected-token
