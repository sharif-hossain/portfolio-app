import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Home/Nabvar/Navbar";
import "./ProjectInfo.css";
// import ProjectsData from '../../fakeData/ProjectsData';
import ProjectsData from "../../fakeData/ProjectsData";
import CommonProject from "./CommonProject";
import NotFound from "../Home/Home/NotFound/NotFound";
const ProjectInfo = () => {
  const { id } = useParams();

  const [projectInfo, setProjectInfo] = useState([]);

  useEffect(() => {
    const project = ProjectsData.find((data) => data.id === parseInt(id));
    setProjectInfo(project);
  }, [id]);

  console.log(projectInfo);
  return (
    <div>
      <Navbar></Navbar>

      {projectInfo ? <div className="mx-5 p-5 bg">
        <div>
          <h1 className="heading my-3">Projects Details</h1>
        </div>
        <h2 className="font-weight-bold">Name: {projectInfo.title}</h2>
        <div>
          <h3 className="font-weight-bold">
            Description: <span></span>{" "}
          </h3>
          <p className="p-2 ">{projectInfo.description}</p>
        </div>
        <h3 className="p-2 font-weight-bold">Key Features:</h3>
        {/* <h5 className="p-2">{projectInfo.features}</h5> */}
        <section className="features">
          <div className="row">
            <div className="col-md-5">
              <h4>Client Side: </h4>
              <li>{projectInfo.features}</li>
              {/* <li>{projectInfo.features.f1}</li> */}
            </div>
            <div className="col-md-5">
              <h4>Server side : </h4>
              <li>{projectInfo.features}</li>
            </div>
          </div>

          {/* <ul>
            <li>{projectInfo.features[3]}</li>
            <li>{projectInfo.features[4]}</li>
            <li>{projectInfo.features[5]}</li>
          </ul>  */}
        </section>

        <div className="p-2">
          <a className="" href="https://creative-agency-11.netlify.app/">
            {" "}
            Live site : {projectInfo.liveSite}
          </a>
          <br />
          <a href="https://github.com/sharif-hossain/creative-agency-client">
            {" "}
            Github: {projectInfo.github}
          </a>
        </div>
        <div>
          <h3 className="p-2 font-weight-bold">User Interfaces:</h3>
          <img className="img-fluid image" src={projectInfo.image} alt="" />
        </div>
        <div className="text-center p-2">
          <Link to="/home">
            <button className="btn btn-secondary">See more projects</button>
          </Link>
        </div>
      </div> : <Link to="/home"><button className="btn btn-primary mx-5">Sorry! See projects?</button></Link>} 
    </div>
  );
};

export default ProjectInfo;
