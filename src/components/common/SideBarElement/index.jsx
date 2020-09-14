import React from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.scss';

const SideBarElement = ({ url, iconClass, text, lis }) => {
    return (
        <>
            <Link className={classes.sidbar__element} to={url}>
                <i className={iconClass} aria-hidden="true"></i>
                <span>{text}</span>
            </Link>
            <ul className={classes.nav__links}>
                {lis.map((li, index) => (
                    <li key={index}>
                        <Link className={classes.sidbar__element} to={url}>
                            <i className={li.iconClass} aria-hidden="true"></i>
                            <span>{li.text}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default SideBarElement;