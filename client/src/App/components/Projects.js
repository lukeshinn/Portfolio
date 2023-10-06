import React, { Component, useState } from 'react';

const Projects = ({ projects, activeProject }) => {
  // const projectClassNames = classNames({
  //   ["projects"]: true,
  //   ["show-project"]: true,
  // });
  return (
    <>
      {projects ? (
        projects.map((project, index) => {
          return (
            <div
              className={
                'project ' + (activeProject == index ? 'show-project' : '')
              }
              key={index}
            >
              <h1>{project.company}</h1>
              <span className="message-border">
                <h3>Projects</h3>
                {project.projectDescription.map((text, index) => {
                  return <p key={index}>{text}</p>;
                })}
              </span>
            </div>
          );
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
