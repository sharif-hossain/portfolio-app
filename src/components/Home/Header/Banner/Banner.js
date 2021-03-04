import React from "react";
import "./Banner.css";
import pdf from "../../../../pdf/resume.pdf";

const Banner = () => {
  return (
    <div className="row mx-5 d-flex align-items-center banner mb-3">
      <div className="col-md-6 detail-info">
        <h1 className="header">
          I'm <span className="banner-color ">Sharif</span>
        </h1>
        {/* <p>Professional web developer comfortable with <strong className="banner-color">reactJS</strong> </p> */}
        <p>
          Passionate front-end web developer comfortable with using{" "}
          <strong className="banner-color">
            JavaScript, React JS, Node JS, MongoDB{" "}
          </strong>{" "}
          to build all aspects of the user experience and user interface{" "}
        </p>
        <a href={pdf} download="resume.pdf">
          <button className="btn btn-primary">DOWNLOAD RESUME</button>
        </a>
      </div>
      <div className="col-md-6">
        <img
          className="img-fluid image"
          src="https://i.ibb.co/rch25BN/Frame.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
