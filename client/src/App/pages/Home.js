import React, { Component } from "react";
import Layout from "../components/Layout";
import Projects from "./Projects";
import ProjectLinks from "./ProjectLinks";
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    books {
      title
      author
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(FILMS_QUERY);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  console.log(data);

  const [activeProject, setActiveProject] = useState(false);

  return (
    <Layout>
      <div class="feature-content">
        <div class="main-message">
          <h1 class="HomePage">Home Page</h1>
          <p>This is a message about me</p>
          <Projects projects={data.books} />
        </div>
        <div class="project-links">
          <ProjectLinks projectLinks={data.books} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;

// https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3
// https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/
