import React, { Component, useState } from "react";

const Projects = ({ projects }) => {
  const [isSelectedProject, setSelectedProject] = useState([]);
  return (
    <>
      {projects ? (
        projects.map((project, index) => {
          return <div className={project.title}>{project.title}</div>;
        })
      ) : (
        <div>You dont have any projects</div>
      )}
    </>
  );
};

export default Projects;

// https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3
// https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/
