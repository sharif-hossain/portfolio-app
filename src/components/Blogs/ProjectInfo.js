import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Home/Nabvar/Navbar";
import "./ProjectInfo.css";
// import ProjectsData from '../../fakeData/ProjectsData';
import ProjectsData from "../../fakeData/ProjectsData";
import CommonProject from "./CommonProject";
import NotFound from "../Home/Home/NotFound/NotFound";
import FeatureItem from "./FeatureItem";
const ProjectInfo = () => {
  const { id } = useParams();

  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const project = ProjectsData.find((data) => data.id === parseInt(id));
    setProjectData(project);
  }, [id]);

  console.log(projectData);
  return (
    <div>
      <Navbar style={{ backgroundColor: "#F1F5F8" }}></Navbar>

      
        <div className="mx-5 p-5 bg">
          <div>
            <h1 className="heading my-3">Projects Details</h1>
          </div>
          <h2 className="font-weight-bold animate__animated animate__rubberBand animate__delay-1s">Project Name: <span className="title">{projectData.title}</span></h2>
          
          <div>
            <h4 className="font-weight-bold n2-ss-highlighted-heading-highlighted-text">
              Description: <span></span>{" "}
            </h4>
            <p className="p-2 ">{projectData.description}</p>
          </div>
          <h4 className="p-2 font-weight-bold">Key Features:</h4>
          {/* <h5 className="p-2">{projectInfo.features}</h5> */}
          <div className="row module-border-wrap">
            <div className="col-md-6 module">
            <h5 className="font-weight-bold">Client Side : </h5>
                <li>{projectData.feature1}</li>
                <li>{projectData.feature2}</li>
                <li>{projectData.feature3}</li>
            </div>
            <div className="col-md-6 module">
            <h5 className="font-weight-bold">Server side : </h5>
                <li>{projectData.feature4}</li>
                <li>{projectData.feature5}</li>
                <li>{projectData.feature6}</li>
            </div>
          </div>
          {/* <section className="features">
            <div className="row p-2">
              <div className="col-md-6">
                <h5 className="font-weight-bold">Client Side : </h5>
                <li>{projectData.feature1}</li>
                <li>{projectData.feature2}</li>
                <li>{projectData.feature3}</li>
              </div>
              <div className="col-md-6">
                <h5 className="font-weight-bold">Server side : </h5>
                <li>{projectData.feature4}</li>
                <li>{projectData.feature5}</li>
                <li>{projectData.feature6}</li>
              </div>
             
            </div>
          </section> */}

          <div className="mt-5">
            <a className="" href="https://creative-agency-11.netlify.app/">
              {" "}
              <h6 target="_blank" className="font-weight-bold ">Live site : <span className="text-color">{projectData.liveSite}</span></h6>
            </a>
            
            <a href="https://github.com/sharif-hossain/creative-agency-client">
              {" "}
              <h6 target="_blank" className="font-weight-bold">Github: <span className="text-color">{projectData.github}</span> </h6>
            </a>
          </div>
          <div>
            <h4 className="my-4 font-weight-bold">User Interfaces:</h4>
            <div className="row img-size">
              <div className="col-md-6">
                <img className="img-fluid image" src={projectData.image1} alt="" />  
              </div>
              <div className="col-md-6">
              <img className="img-fluid image" src={projectData.image2} alt="" /> 
              </div>
            </div>
          </div>
          <div className="text-center p-2">
            <Link to="/home">
              <button className="btn btn-secondary">See more projects</button>
            </Link>
          </div>
        </div>
    </div>
  );
};

export default ProjectInfo;
