import React from 'react';
import Clients from './components/Clients';
import { Route, Redirect, Switch } from 'react-router-dom';
import Logo from './components/common/Logo';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="row">
      <div className="col-3">
        <Logo />
        <SideBar />
      </div>
      <div className="col-9" >
        <Switch>
          <Route path="/clients" component={Clients} />
          <Redirect from="/" exact to="/clients" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
