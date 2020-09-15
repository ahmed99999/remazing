import React from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.scss';

const SideBarElement = ({ url, iconClass, text, lis }) => {
    const hasChildren = (lis.length > 0);
    return (
        <Link to={url} className={classes.sidbar__element__Link}>
            <i className={`${iconClass} ${classes.sidbar__element__Link__a_before}`} aria-hidden="true"></i>
            <span>{text}</span>
            {hasChildren && <i className={`fa fa-arrow-down ${classes.sidbar__element__Link__a_after}`} aria-hidden="true"></i>}
        </Link>
    );
}

export default SideBarElement;