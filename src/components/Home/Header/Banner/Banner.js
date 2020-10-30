import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="row mx-5 d-flex align-items-center">
            <div className="col-md-4 detail-info">
                <h1>I'm Sharif</h1>
                <p>Professional web developer comfortable with <strong>reactJS</strong> </p>
                <button className="btn btn-primary">DOWNLOAD RESUME</button>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src="https://i.ibb.co/rch25BN/Frame.png" alt=""/>
            </div>
        </div>
    );
};

export default Banner;