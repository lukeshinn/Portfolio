import React, { Component } from "react";

const ProjectLinks = ({ projectLinks, isActiveProject }) => {
  const mainContainerClassNames = classNames({
    ["isActiveProject"]: true,
  });
  return (
    <div class="project-links-inner">
      {projectLinks ? (
        projectLinks.map((project, index) => {
          return (
            <div className={project.title} key={index}>
              <a>{project.author} </a>
            </div>
          );
        })
      ) : (
        <div>You dont have any projectLinks</div>
      )}
    </div>
  );
};

export default ProjectLinks;

// https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3
// https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/
