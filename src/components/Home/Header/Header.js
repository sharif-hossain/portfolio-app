import React from 'react';
import Navbar from '../Nabvar/Navbar';
import Banner from './Banner/Banner';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner/>
        </div>
    );
};

export default Header;