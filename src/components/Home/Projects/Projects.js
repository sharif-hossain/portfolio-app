import React, { useEffect, useState } from "react";
import "./Projects.css";
import ProjectsData from '../../fakeData/ProjectsData'
import ProjectItem from "../ProjectItem/ProjectItem";
const Projects = () => {
    const projectsDetails = ProjectsData;
    const [projectInfo, setProjectInfo] = useState(projectsDetails);
    

  return (
    <div className="project-bg">
      <div className=" text-center text-centering my-5 ">
        <h1 className="text-white mt-2">Projects</h1>
      </div>
      <div className="row mx-5">
        {
            projectInfo.map(data => <ProjectItem key={data.id} data={data}></ProjectItem> )
        }
      </div>
    </div>
  );
};

export default Projects;
