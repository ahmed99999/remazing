import React, { Component } from 'react';
import classes from './index.module.scss';
import SeachBar from '../SearchBar';
import Client from '../client';
import Loading from '../common/Loading';
import ClientClass from '../../services/clientsService';

class Clients extends Component {
    state = {
        clients: [],
        loading: false,
        shape: true
    };

    async componentDidMount() {
        const clients = await ClientClass.getClients();
        this.setState({ clients, loading: true });
    }

    handelSearch = async clientName => {
        const clients = await ClientClass.getClients();
        const filteredClients = clients.filter(client => client.name.toLowerCase().includes(clientName.toLowerCase()));
        this.setState({ clients: filteredClients });
    };

    setShape = () => {
        const shape = !this.state.shape;
        this.setState({ shape });
    };

    render() {
        const { clients, shape, loading } = this.state;
        return (
            <>
                {!loading && <Loading />}
                {loading && <div>
                    <div className={`row ${classes.brands}`}>
                        <h5>Brands</h5>
                    </div>
                    <div className="row">
                        <SeachBar
                            handelSearch={this.handelSearch}
                            setShape={this.setShape}
                            className={`${classes.seach_bar__div}`}
                        />
                    </div>
                    <div className="row">
                        {clients.map((client, index) => (
                            <Client
                                key={index}
                                client={client}
                                shape={shape}
                            />
                        ))}
                    </div>
                </div>}
            </>
        );
    }
}

export default Clients;