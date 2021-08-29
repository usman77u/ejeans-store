import React from 'react';
import Common from './Common';
import herosection from '../src/images/women.jpg';
//import { NavLink } from 'react-router-dom';
const About = () =>{
    return(
        <>
        <Common
        name="Welecome to Our Team"
        imgsrc={herosection}
        visit="/contact"
        btnname="Contact Now"/>
        </>

    );
};
export default About;