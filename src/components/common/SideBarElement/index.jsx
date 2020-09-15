import React from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.scss';

const SideBarElement = ({ url, iconClass, text, lis }) => {
    const hasChildren = (lis.length > 0);
    return (
        <Link to={url} className={classes.sidbar__element__Link}>
            <i className={iconClass} aria-hidden="true"></i>
            <span>{text}</span>
            {hasChildren && <i className="fa fa-arrow-down" aria-hidden="true"></i>}
        </Link>
    );
}

export default SideBarElement;
{/* {hasChildren &&
                <div>
                    <button className={classes.sidbar__element} to={url}>
                        <i className={iconClass} aria-hidden="true"></i>
                        <span>{text}</span>
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </button>
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
                </div>} */}