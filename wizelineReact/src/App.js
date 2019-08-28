import React from 'react';
import Clock from './components/Clock';
import Clicker from './components/Clicker';
import Welcome from './components/Welcome'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <br />
        <Clock date={new Date()} />
        <br />
        <Clicker />
      </header>
    </div>
  );
}

export default App;
