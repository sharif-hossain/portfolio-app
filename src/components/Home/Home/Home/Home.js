import React from 'react';
import Blogs from '../../../Articles/Blogs';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Projects from '../../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Blogs/>
            <Footer></Footer>
        </div>
    );
};

export default Home;