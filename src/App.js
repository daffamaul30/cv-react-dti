import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import navRoutes from './config/navRoutes';

import { Navigation } from './components/index';

import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="jumbotron" />
      <div className="profil">
        <Switch>
          {navRoutes.map((nav) => {
            return <Route path={nav.path} component={nav.component} />;
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
