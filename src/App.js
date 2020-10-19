import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import navRoutes from './config/navRoutes';

// import { Navigation } from './components/index';

import './App.css';

const color = {
  active: {
    background: 'rgb(169, 169, 169, 0.8)',
    textColor: 'black',
  },
  notActive: {
    background: 'transparent',
    textColor: 'white',
  },
};
const ActiveColor = React.createContext(color);

function App() {
  return (
    <Router>
      <ActiveColor.Provider value={color}>
        <Navigation />
      </ActiveColor.Provider>
      <div className="jumbotron" />
      <div className="profil">
        <Switch>
          {navRoutes.map((nav) => {
            return (
              <Route key={nav.path} path={nav.path} component={nav.component} />
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

function Navigation() {
  const navigation = [
    {
      name: 'Home',
      destination: '/home',
    },
    {
      name: 'About',
      destination: '/about',
    },
    {
      name: 'Skills',
      destination: '/skills',
    },
    {
      name: 'Education & Experience',
      destination: '/education&experience',
    },
  ];
  const colorActive = useContext(ActiveColor);
  const [isActive, setIsActive] = useState('Home');
  useEffect(() => {
    navigation.forEach((nav) => {
      document.getElementById(`${nav.name}`).style.backgroundColor =
        colorActive.notActive.background;
      document.getElementById(`${nav.name}`).style.color =
        colorActive.notActive.textColor;
    });
    const menu = document.getElementById(`${isActive}`);
    menu.style.backgroundColor = colorActive.active.background;
    menu.style.color = colorActive.active.textColor;
  });
  return (
    <div className="navigation">
      <ul className="menu">
        {navigation.map((x) => {
          return (
            <Link
              to={x.destination}
              key={x.destination}
              onClick={() => {
                setIsActive(x.name);
              }}
            >
              {/* <span className="menu">{x.name}</span> */}
              <li id={x.name}>{x.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
