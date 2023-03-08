import About from "./pages/About";
import List from "./pages/List";
import Home from "./pages/Home";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/about" component={About} />
      </>
    </BrowserRouter>
  );
};

export default App;
