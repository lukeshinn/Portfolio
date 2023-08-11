import About from "./pages/About";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import GraphQL from "./pages/GraphQL";
import API from "./pages/API";
import { BrowserRouter, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const port = process.env.PORT;
const uriString = `https://lukeshinndotdev-0ef255dc6ff1.herokuapp:${port}/`;

const client = new ApolloClient({
  // uri: "https://spacex-production.up.railway.app/",
  uri: "https://localhost:4000/",
  // uri: uriString,
  cache: new InMemoryCache(),
});

var test = process.env.PORT;

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/todolist" component={TodoList} />
          <Route path="/graphql" component={GraphQL} />
          <Route path="/api" component={API} />
        </>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
