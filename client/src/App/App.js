import Home from './pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';

// const port = process.env.PORT;
// const uriString = `https://lukeshinndotdev-0ef255dc6ff1.herokuapp:${port}/`;
const httpLink = new HttpLink({
   uri: `https://shinnportfolio-009251919201.herokuapp.com//graphql`,
  //uri: `http://localhost:4000/graphql`,
});

const client = new ApolloClient({
  // uri: "https://lukeshinndotdev-0ef255dc6ff1.herokuapp/graphql",
  // uri: "http://localhost:4000/",
  // uri: uriString,
  link: httpLink,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <>
          <Route exact path="/" component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="/todolist" component={TodoList} />
          <Route path="/graphql" component={GraphQL} />
          <Route path="/api" component={API} /> */}
        </>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
