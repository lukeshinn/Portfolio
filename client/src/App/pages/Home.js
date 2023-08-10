import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Projects from "./Projects";
import { useQuery, gql } from "@apollo/client";
import classNames from "classnames";
import ImageLoader from "../components/ImageLoader";
import Headshot from "../../public/hs-transparent.png";

const PROJECTS_QUERY = gql`
  {
    projects {
      title
      author
    }
  }
`;

const Home = () => {
  const [activeProject, setActiveProject] = useState([]);

  useEffect(() => {
    setActiveProject();
  }, []);

  const { data, loading, error } = useQuery(PROJECTS_QUERY);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  console.log(data);

  const setProject = (project) => {
    console.log(activeProject);
    activeProject != project ? setActiveProject(project) : setActiveProject();
  };

  const welcomeMessageClassnames = classNames({
    ["welcome-message"]: true,
    ["hide-welcome-message"]: activeProject != undefined,
  });

  return (
    <Layout>
      <div className="projects-overview">
        <div className="main-message">
          <div className={welcomeMessageClassnames}>
            <h1 className="welcome-message">Welcome</h1>
            <p>
              Hi, I'm Luke. A technically sound, creative problem solving,
              culture giant
            </p>
            <ImageLoader src={Headshot} />
          </div>
          <div className="individual-project">
            <Projects
              projects={data.projects}
              activeProject={activeProject}
              key={data.projects}
            />
          </div>
        </div>
        <div className="spacer"></div>
        <div className="project-links">
          <h1>Projects</h1>
          <div className="project-links-wrapper">
            <div className="project-links-inner">
              {data ? (
                data.projects.map((project, index) => {
                  return (
                    <div className="project-link" key={index}>
                      <span onClick={() => setProject(index)}>
                        {project.author}
                      </span>
                    </div>
                  );
                })
              ) : (
                <div>You dont have any projectLinks</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

// https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3
// https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/
