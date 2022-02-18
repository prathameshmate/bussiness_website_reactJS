// import { fontWeight } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
            <div className='container'>
                <div className='data_container'>
                    <h1>{props.name}<strong style={{ color: "rgb(28, 95, 238)", fontSize: "35px"   }}>MateTechnical</strong></h1>
                    <p>We are the team of talented developer making website</p>
                    <button class="btn btn-primary">
                        <NavLink className="link" to={props.visit} >{props.btnName}</NavLink>
                    </button>
                </div>
                <div className='img_container'>
                    <img src={props.imgsrc} alt="srcimg.img" />
                </div>
            </div>
        </>
    );
}

export default Common;