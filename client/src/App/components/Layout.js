import "../assets/styles.scss";
import NavBar from "../navbar/Navbar";
import Footer from "../pages/Footer";
import React, { useState, useEffect } from "react";
import classNames from "classnames";

const Layout = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log("page loaded");
      setLoaded(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const mainContainerClassNames = classNames({
    ["main-container"]: true,
    ["isLoaded"]: loaded,
  });

  return (
    <main>
      <div className={mainContainerClassNames}>
        <div class="border top-left"></div>
        <NavBar />
        <div class="inner-content">{children}</div>
        <Footer />
        <div class="border bottom-right"></div>
      </div>
    </main>
  );
};

export default Layout;
