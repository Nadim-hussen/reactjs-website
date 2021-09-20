import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Service from './components/sevice';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact';
import './components/About.css';

const Navbar = () => {

  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Nadim-hussan</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Service">services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/About">About us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Contact">Contact us</NavLink>
                </li>

              </ul>

            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/Service"><Service /></Route>
          <Route exact path="/About"><About /></Route>
          <Route exact path="/Contact"><Contact /></Route>

        </Switch>
      </Router>
    </>
  );
}
export default Navbar;