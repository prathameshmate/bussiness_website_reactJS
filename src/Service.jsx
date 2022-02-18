import React from 'react';
import Card from './Card';
import Array from './Img_And_Title_arrray'

const Service = () => {

    return (
        <>

            <div className='heading_service'>
                <p>OUR SERVICES</p>
            </div>

            <div className='cards'>
                {
                    Array.map((currValue, index) => {
                        return (
                            <Card
                                key={index}
                                imgsrc={currValue.imgsrc}
                                title={currValue.title}
                            />
                        );
                    })
                }
            </div>
        </>
    );
}

export default Service;