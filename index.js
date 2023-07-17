const express = require("express");
const path = require("path");
var db = require("./database.js");

var md5 = require("md5");

var bodyParser = require("body-parser");

const app = express();

const { ApolloServer, gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields: 'title' and 'author'.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// https://www.apollographql.com/blog/graphql/examples/building-a-graphql-api/

// // JSON requests
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, "client/build")));

// app.get("/api/users", (req, res, next) => {
//   console.log("users hit");
//   var sql = "select * from user";
//   var params = [];
//   db.all(sql, params, (err, rows) => {
//     if (err) {
//       console.log("error connecting to db");
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: rows,
//     });
//   });
// });

// app.post("/api/user/", (req, res, next) => {
//   console.log("/api/user POST hit");
//   var errors = [];
//   if (!req.body.password) {
//     errors.push("No password specified");
//   }
//   if (!req.body.email) {
//     errors.push("No email specified");
//   }
//   if (errors.length) {
//     res.status(400).json({ error: errors.join(",") });
//     return;
//   }
//   var data = {
//     name: req.body.name,
//     email: req.body.email,
//     password: md5(req.body.password),
//   };
//   var sql = "INSERT INTO user (name, email, password) VALUES (?,?,?)";
//   var params = [data.name, data.email, data.password];
//   db.run(sql, params, function (err, result) {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: data,
//       id: this.lastID,
//     });
//   });
// });

// app.delete("/api/user/", (req, res, next) => {
//   db.run("DELETE FROM user WHERE id = ?", req.body.id, function (err, result) {
//     if (err) {
//       res.status(400).json({ error: res.message });
//       return;
//     }
//     res.json({ message: "deleted", rows: this.changes });
//   });
// });

// app.get("/api/todos", (req, res, next) => {
//   console.log("todos hit");
//   var sql = "select * from todos";
//   var params = [];
//   db.all(sql, params, (err, rows) => {
//     if (err) {
//       console.log("error connecting to db");
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: rows,
//     });
//   });
// });

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// const port = process.env.PORT || 4000;
// app.listen(port);

// console.log("App is listening on port " + port);

// HELPFUL NOTES
// https://code.visualstudio.com/docs/nodejs/nodejs-debugging
