import React, { Component } from 'react';
import classes from './clients.module.scss';

class Clients extends Component {
    state = {}
    render() {
        return (
            <div className={classes.clients}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        );
    }
}

export default Clients;