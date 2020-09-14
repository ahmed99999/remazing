import React, { Component } from 'react';
import classes from './clients.module.scss';
import SeachBar from '../SearchBar';

class Clients extends Component {
    state = {
        clients: [],
        loaded: false
    };


    render() {
        return (
            <div className={classes.clients}>
                <div>
                    <h3>Brands</h3>
                </div>
                <div>
                    <SeachBar />
                </div>
                <div></div>
            </div>
        );
    }
}

export default Clients;