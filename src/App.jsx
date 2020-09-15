import React from 'react';
import Clients from './components/Clients';
import { Route, Redirect, Switch } from 'react-router-dom';
import Logo from './components/common/Logo';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import classes from './app.module.scss';

function App() {
  return (
    <>
      <div className="row" >
        <div className={`col-3 ${classes.Logo__div}`}>
          <Logo />
        </div>
        <div className="col-9">
          <NavBar />
        </div>
      </div>
      <div className={`row`}>
        <div className={`col-3 ${classes.sideBar__div}`}>
          <SideBar />
        </div>
        <div className={`col-9 ${classes.Content__div}`} >
          <Switch>
            <Route path="/clients" component={Clients} />
            <Redirect from="/" exact to="/clients" />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
