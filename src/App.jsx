import React from 'react';
import Clients from './components/Clients';
import { Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/clients" component={Clients} />
      <Redirect from="/" exact to="/clients" />
    </Switch>
  );
}

export default App;
