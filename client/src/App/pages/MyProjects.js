import React, { Component } from "react";
import Project from "./Project";
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

const Projects = () => {
  const { data, loading, error } = useQuery(FILMS_QUERY);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  console.log(data);
  return (
    <>
      <h1>Projects</h1>
      <Project projects={data.launchesPast} />
    </>
  );
};

export default Projects;

// https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3
// https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/
