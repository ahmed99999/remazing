import React from 'react';
import Clients from './components/Clients';
import { Route, Redirect, Switch } from 'react-router-dom';
import Logo from './components/common/Logo';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
      <Logo />
      <SideBar />
      <Switch>
        <Route path="/clients" component={Clients} />
        <Redirect from="/" exact to="/clients" />
      </Switch>
    </>
  );
}

export default App;
