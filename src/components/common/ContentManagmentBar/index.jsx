import React from 'react';
import classes from './content-managment-bar.module.scss';
import { Link } from 'react-router-dom';

const ContentManagmentBar = () => {
    return (
        <Link to="/content" className={classes.content_managment}>
            Content Managment
        </Link>
    );
}

export default ContentManagmentBar;