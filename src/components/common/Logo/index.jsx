import React from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.scss';

const Logo = () => {
    return (
        <Link to="/clients" className={classes.logo}>
            <img src="logo-image.jpg" alt="Logo" />
        </Link>
    );
}

export default Logo;