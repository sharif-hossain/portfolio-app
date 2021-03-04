import React from 'react';
import Navbar from '../../Nabvar/Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar/>
            <div className="text-center font-weight-bold" style={{backgroundColor:'#f1f5f8', paddingTop:'150px', minHeight:'650px'}}>
               <h1 className="font-weight-bold">Sorry! page not found :(</h1>
            </div>
            
        </div>
    );
};

export default NotFound;