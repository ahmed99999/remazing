import React, { Component } from 'react';
import classes from './clients.module.scss';
import Logo from '../common/Logo';

class Clients extends Component {
    state = {}
    render() {
        return (
            <div className={classes.clients}>
                <Logo />
            </div>
        );
    }
}

export default Clients;