import React, { Component } from "react";
import Layout from "../components/Layout";
import Projects from "./MyProjects";

const Home = () => {
  return (
    <Layout>
      <div class="feature-content">
        <div class="main-message">
          <h1 class="HomePage">Home Page</h1>
          <Projects />
        </div>
        <div class="project-links">LINKS</div>
      </div>
    </Layout>
  );
};

export default Home;

// https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3
// https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/
