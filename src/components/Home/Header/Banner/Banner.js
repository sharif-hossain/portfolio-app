import React from 'react';
import './Banner.css'
import pdf from '../../../../pdf/resume.pdf';


const Banner = () => {
    return (
        <div className="row mx-5 d-flex align-items-center">
            <div className="col-md-4 detail-info">
                <h1>I'm Sharif</h1>
                <p>Professional web developer comfortable with <strong className="banner-color">reactJS</strong> </p>
                <a href={pdf} download="resume.pdf"><button className="btn btn-primary">DOWNLOAD RESUME</button></a>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src="https://i.ibb.co/rch25BN/Frame.png" alt=""/>
            </div>
        </div>
    );
};

export default Banner;