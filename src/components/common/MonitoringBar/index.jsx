import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './monitoring-bar.module.scss';

const MonitoringBar = () => {
    return (
        <Link to="/monitoring" className={classes.monitoring_bar} >
            Monitoring
        </Link>
    );
}

export default MonitoringBar;