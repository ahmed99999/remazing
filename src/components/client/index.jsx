import React, { Component } from 'react';
import classes from './index.module.scss';

class Client extends Component {
    state = {};

    render() {

        const { client } = this.props;
        return (
            <div className={`card ${classes.client__card}`}>
                <img className="card-img-top" src={client.imageUrl} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">{client.name}</p>
                </div>
            </div>
        );
    }
}

export default Client;