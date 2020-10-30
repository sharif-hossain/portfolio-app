import React from "react";
import "./ProjectItem.css";

const ProjectItem = ({ data, handleClick }) => {
  
  return (
    <div className="col-md-4"  onClick={()=>handleClick(data)}>
      <div class="card card-sizing mb-5">
        <div class="view overlay" >
          <img class="card-img-top image" src={data.img} alt="" />
          <a href>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>

        <div class="card-body">
          <h3 class="card-title text-center mb-4">{data.title}</h3>

          <p class="card-text text-center tech-bg">
            <span className="mr-2">{data.technology[0]}</span> <span className="mr-2">{data.technology[1]}</span>{" "}
            <span className="mr-2">{data.technology[2]}</span>
          </p>
        </div>

        <div class="rounded-bottom mdb-color lighten-3 text-center bg-dark pt-3">
          <ul class="list-unstyled list-inline font-small d-flex justify-content-between mx-2">
            <li class="list-inline-item  white-text">
            <i class="fab fa-github pl-3"></i>
            </li>
            <li class="list-inline-item pr-2">
              <a href="/" class="white-text">
                Live Link
              </a>
            </li>
            <li class="list-inline-item pr-2">
              <a href="/" class="white-text">
                Source code
              </a>
            </li>
            <li class="list-inline-item">
              <a href="/" class="white-text">
                
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
