import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/clients">
            <img src="logo-image.jpg" />
        </Link>
    );
}

export default Logo;