import React, { useState } from 'react';
import classes from './index.module.scss';


const Client = ({ client, shape }) => {
    const [isShown, setIsShown] = useState(false);

    return (
        <>
            {shape && <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                {!isShown && <div className={`card ${classes.client__card}`}>
                    <img className="card-img-top" src={client.imageUrl} alt="Card cap" />
                </div>}
                {isShown && <div className={`card ${classes.client__card}`}>
                    <div className={`card-body ${classes.client__card__div}`}>
                        <div className={`${classes.client__card__div__ul}`}>
                            <div>All Phases</div>
                            <div>Monitoring</div>
                            <div>Amazon Cases</div>
                            <div>Dashboard</div>
                            <div>Product Catalog</div>
                        </div>
                    </div>
                </div>}
            </div>}
            {!shape && <div className={`card mb-3 ${classes.client__card__list}`}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="card-img" src={client.imageUrl} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{client.name}</h5>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Client;