import React from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.scss';

const Logo = () => {
    return (
        <Link to="/clients" className={classes.logo} >
            <img src="https://uno-production.imgix.net/accounts/logos/31858/original_1551199776.png?auto=format%2Ccompress&fit=clip&fm=png&h=250&q=70&trim=color&trimcolor=ffffff&w=376" alt="Logo" />
        </Link>
    );
}

export default Logo;