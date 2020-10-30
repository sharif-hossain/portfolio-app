import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Home/Nabvar/Navbar";
import "./ProjectInfo.css";
// import ProjectsData from '../../fakeData/ProjectsData';
import ProjectsData from "../../fakeData/ProjectsData";
const ProjectInfo = () => {
  const { id } = useParams();

  const [projectInfo, setProjectInfo] = useState({});

  // const projects = ProjectsData.find(item => item.id === parseInt(id));
  //   console.log(projects)

  useEffect(() => {
    const project = ProjectsData.find((data) => data.id === parseInt(id));
    setProjectInfo(project);
    console.log(project);
  }, [id]);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="heading my-5">Projects Details</h1>
      <div>
        <h2>{projectInfo.title}</h2>
        <div>
          <h3>
            Description: <span></span>{" "}
          </h3>
          <p>{projectInfo.description}</p>
        </div>
        <h3>Key Features:</h3>
        <section className="features">
          <h4>Client Side: </h4>
          <ul>
            <li>{projectInfo.features[0]}</li>
            <li>{projectInfo.features[1]}</li>
            <li>{projectInfo.features[2]}</li>
          </ul>
          <h4>Server side : </h4>
          <ul>
            <li>{projectInfo.features[3]}</li>
            <li>{projectInfo.features[4]}</li>
            <li>{projectInfo.features[5]}</li>
          </ul>
        </section>
        <div>
          <h5>GitHub link: {projectInfo.github}</h5>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
