import React from 'react';
import { Link } from 'react-router-dom';
import classes from './side-bar-element.module.scss';

const SideBarElement = ({ url, text, lis }) => {
    return (
        <React.Fragment>
            <div className={classes.sid_bar_element} >
                {text}
            </div>
            <ul>
                {lis.map(liText => (
                    <li>
                        <Link className={classes.liItem} to={`/${url}`}>{liText}</Link>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
}

export default SideBarElement;