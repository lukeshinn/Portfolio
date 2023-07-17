import React, { Component } from "react";

const Project = ({ projects }) => {
  return (
    <>
      {projects ? (
        projects.map((project, index) => {
          return <p>{project.title}</p>;
        })
      ) : (
        <div>You dont have any projects</div>
      )}
    </>
  );
};

export default Project;

// https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3
// https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/
