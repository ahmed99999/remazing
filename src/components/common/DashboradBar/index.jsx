import React from 'react';
import classes from './dashborad.module.scss';
import { Link } from 'react-router-dom';

const DashboradBar = () => {
    return (
        <Link to="/dashborad" className={classes.dashborad}>
            Dashborad
        </Link>
    );
}

export default DashboradBar;