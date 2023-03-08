import About from "./pages/About";
import List from "./pages/List";
import Home from "./pages/Home";
import GraphQL from "./pages/GraphQL";
import { BrowserRouter, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/about" component={About} />
          <Route path="/graphql" component={GraphQL} />
        </>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
