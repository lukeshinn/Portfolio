import React from "react";
import "../assets/styles.scss";
import NavBar from "../navbar/Navbar";
import Footer from "../pages/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>
        <div class="container">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
