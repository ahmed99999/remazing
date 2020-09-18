import React, { useEffect, useState } from 'react';
import classes from './index.module.scss';
import UserClass from '../../services/userService';

const NavBar = () => {

    const [user, handelUser] = useState({ name: '', image: '' });

    useEffect(() => {
        const user = new UserClass();
        user.getUser()
            .then(user => handelUser({ ...user }))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className={classes.nav_bar}>
            <div className="float-right">
                <i className="fa fa-bell" aria-hidden="true"></i>
                <span>{user.name}</span>
                <img src={user.image} alt="" />
            </div>
        </div>
    );
}

export default NavBar;