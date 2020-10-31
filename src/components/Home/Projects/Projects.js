import React, { useEffect, useState } from "react";
import "./Projects.css";
import ProjectsData from '../../../fakeData/ProjectsData'
import ProjectItem from "../ProjectItem/ProjectItem";
import { useHistory } from "react-router-dom";
import NotFound from "../Home/NotFound/NotFound";
const Projects = () => {
  const history = useHistory();
    const projectsDetails = ProjectsData;
    const [projectInfo, setProjectInfo] = useState(projectsDetails);
    
  const handleClick = (data) =>{
    
    history.push(`/projects/${data.id}`)
    // console.log('project details', data)
  }
  return (
    <div className="project-bg">
      <div className=" text-center text-centering my-5 ">
        <h1 className="text-white mt-2">Projects</h1>
      </div>
      <div className="row mx-5">
        {
          projectInfo.map(data => <ProjectItem id={data.id} data={data} handleClick={handleClick}></ProjectItem> )
        }
      </div>
    </div>
  );
};

export default Projects;
