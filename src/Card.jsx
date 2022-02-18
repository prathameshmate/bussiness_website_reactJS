import React from 'react';


const Card = (props) => {
    return (
        <>
            <div className="card" >
                <img src={props.imgsrc} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go Somewhere</a>
                </div>
            </div>

        </>
    );
}

export default Card