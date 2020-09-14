import React, { Component } from 'react';
import classes from './clients.module.scss';
import SeachBar from '../SearchBar';
import Client from '../client';
import ClientClass from '../../services/clientsService';

class Clients extends Component {
    state = {
        clients: [],
        loaded: false
    };

    async componentDidMount() {
        const clients = await ClientClass.getClients();
        this.setState({ clients, loaded: true });
    }

    handelSearch = async clientName => {
        const clients = await ClientClass.getClients();
        const filteredClients = clients.filter(client => client.name.toLowerCase().includes(clientName.toLowerCase()));
        this.setState({ clients: filteredClients });
    };

    render() {
        const { clients } = this.state;

        return (
            <div className={classes.clients}>
                <div>
                    <h3>Brands</h3>
                </div>
                <div>
                    <SeachBar handelSearch={this.handelSearch} />
                </div>
                <div className="row">
                    {clients.map((client, index) => (
                        <Client key={index} client={client} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Clients;