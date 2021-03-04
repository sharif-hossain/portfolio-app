import React from 'react';
import Navbar from '../Home/Nabvar/Navbar';
import './Contacts.css';

const Contacts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="contact-bg">
                <div className="contact-hd text-center">
                    <h1 className="font-weight-bold pt-5">Contacts</h1>
                </div>
                <div className="mt-5 text-center">
                    <p>If you are looking to get ahold of me, you can send me an email at @ <a href="sharifcsekuet@gmail.com"><span style={{color:'goldenRod'}}>sharifcsekuet@gmail.com</span></a></p>
                    <p>My github link: <a href="https://github.com/sharif-hossain"><span style={{color:'goldenRod'}}>https://github.com/sharif-hossain</span></a></p>
                    <p>Some JavaScript article at Medium : <a href=" https://sharif-hossain.medium.com/"><span style={{color:'goldenRod'}}>https://sharif-hossain.medium.com/</span></a></p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;