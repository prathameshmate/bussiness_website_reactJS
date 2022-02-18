import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {

    const date = new Date().getFullYear();

    return <>
        <div className='footer'>
            <p> <CopyrightIcon/> {date} MateTechnical. All Rights Reserved | Terms and Conditions</p>
        </div>
    </>
}

export default Footer;
