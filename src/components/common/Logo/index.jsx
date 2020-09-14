import React from 'react';
import { Link } from 'react-router-dom';
import classes from './logo.module.scss';

const Logo = () => {
    return (
        <Link to="/clients" className={classes.logo}>
            <img src="logo-image.jpg" alt="Logo" />
        </Link>
    );
}

export default Logo;