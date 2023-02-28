import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/styles.scss";
import NavBar from "../navbar/Navbar";
import Footer from "../pages/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

{
  /* <BrowserRouter>
<div class="routes">
  <NavBar />
  <Route exact path="/" component={Home} />
  <Route path="/list" component={List} />
  <Route path="/about" component={About} />
  <Route path="/navBar" component={NavBar} />
  <main>{children}</main>
  <Footer />
</div>
</BrowserRouter> */
}
