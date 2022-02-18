import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <div className="logo">
                <p>MateTechnical</p>
            </div>
            <div className="tabs" >
                <NavLink activeClassName="active" className="link" to="/">Home</NavLink>
                <NavLink activeClassName="active" className="link" to="/service">Service</NavLink>
                <NavLink activeClassName="active" className="link" to="/about">About</NavLink>
                <NavLink activeClassName="active" className="link" to="/contact">Contact</NavLink>
            </div>
        </>
    );
}

export default Menu;