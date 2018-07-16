import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './navigation/SideBar';
import { Landing } from "./components";

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar className="SideBar" />
        <Route exact path={'/'} render={() => <Landing />} />
      </div>
      </Router>
    );
  }
}

export default App;
