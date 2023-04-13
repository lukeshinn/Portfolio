const express = require("express");
const path = require("path");
var db = require("./database.js");

var md5 = require("md5");

var bodyParser = require("body-parser");

const app = express();

// JSON requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/users", (req, res, next) => {
  console.log("users hit");
  var sql = "select * from user";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      console.log("error connecting to db");
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.post("/api/user/", (req, res, next) => {
  console.log("/api/user POST hit");
  var errors = [];
  if (!req.body.password) {
    errors.push("No password specified");
  }
  if (!req.body.email) {
    errors.push("No email specified");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }
  var data = {
    name: req.body.name,
    email: req.body.email,
    password: md5(req.body.password),
  };
  var sql = "INSERT INTO user (name, email, password) VALUES (?,?,?)";
  var params = [data.name, data.email, data.password];
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: data,
      id: this.lastID,
    });
  });
});

app.delete("/api/user/", (req, res, next) => {
  db.run("DELETE FROM user WHERE id = ?", req.body.id, function (err, result) {
    if (err) {
      res.status(400).json({ error: res.message });
      return;
    }
    res.json({ message: "deleted", rows: this.changes });
  });
});

app.get("/api/todos", (req, res, next) => {
  console.log("todos hit");
  var sql = "select * from todos";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      console.log("error connecting to db");
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 4000;
app.listen(port);

console.log("App is listening on port " + port);

// HELPFUL NOTES
// https://code.visualstudio.com/docs/nodejs/nodejs-debugging
