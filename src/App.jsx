import React from 'react';
import Home from "./Home"
import Service from "./Service"
import About from "./About"
import Contact from "./Contact"
import Menu from "./Menu"
import Footer from './Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Redirect } from 'react-router-dom';

const App = () => {
    return (
        <>
            <div className='navbar'>
                <Menu />
            </div>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/service' element={<Service />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Home />} />
            </Routes>

            <Footer />

           
        </>
    );
}

export default App;