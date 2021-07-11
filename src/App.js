import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Tablero from './components/Tablero';
import { Penal } from './components/Penal';
import { Remate } from './components/Remate';
import NavBar from './components/NavBar';

function App() {
  return (
      <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Tablero} />
          <Route path="/penal" component={Penal} />
          <Route path="/remate" component={Remate} />
      </React.Fragment>
  );
}

export default App;
