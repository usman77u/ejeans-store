import React from 'react';
import Common from './Common';
import herosection from '../src/images/HerSection.png';
//import { NavLink } from 'react-router-dom';
const Home = () =>{
    return(
        <>
         <Common
        name="Grow your Skills with Us"
        imgsrc={herosection}
        visit="/service"
        btnname="Get Started"/>
        </>

    );
};
export default Home;