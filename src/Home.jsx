import React from 'react';
import Common from "./Common"
import img from "./img/rocket_man.png"
const Home = () => {
    return (
        <>
            <Common
                name="Grow Your Bussiness With "
                imgsrc={img}
                visit="/service"
                btnName="Get Started" />
        </>
    );
}

export default Home;