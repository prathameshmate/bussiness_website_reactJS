import React from 'react';
import Common from './Common';
import img from "./img/about.jpg"
const About = () => {
    return (
        <>
            <Common
                name="Welcome To About Page "
                imgsrc={img}
                visit="/contact"
                btnName="Contact Now"
            />
        </>
    );
}

export default About;