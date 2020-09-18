import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.scss';

const SideBarElement = ({ url, iconClass, text, lis }) => {

    const [open, handelOpen] = useState(false);

    const chevronClassName = (!open) ? "fa fa-chevron-down" : "fa fa-chevron-up";
    const showListClass = (!open) ? `${classes.sidbar__element__Link__List_hide}` : `${classes.sidbar__element__Link__List_show}`;
    const hasChildren = (lis.length > 0);

    return (
        <>
            {!hasChildren && <Link to={url} className={classes.sidbar__element__Link}>
                <i className={`${iconClass} ${classes.sidbar__element__Link__a_before}`} aria-hidden="true"></i>
                <span>{text}</span>
            </Link>}
            {hasChildren && <>
                <div className={classes.sidbar__element__Link} onClick={() => handelOpen(!open)}>
                    <i className={`${iconClass} ${classes.sidbar__element__Link__a_before}`} aria-hidden="true"></i>
                    <span>{text}</span>
                    <i className={`${chevronClassName} ${classes.sidbar__element__Link__a_after}`} aria-hidden="true"></i>
                </div>
                <div className={showListClass}>
                    {lis.map((li, index) => (
                        <Link key={index} to={li.url} className={classes.sidbar__element__Link}>
                            <i className={`${li.iconClass} ${classes.sidbar__element__Link__a_before}`} aria-hidden="true"></i>
                            <span>{li.text}</span>
                        </Link>
                    ))}
                </div>
            </>}
        </>
    );
}

export default SideBarElement;