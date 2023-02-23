import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import List from "./pages/List";
import About from "./pages/About";
import UserCard from "./pages/UserCard";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/about" component={About} />
        <Route path="/userCard" component={UserCard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
