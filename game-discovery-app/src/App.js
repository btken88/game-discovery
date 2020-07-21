import React from 'react';
import './App.css';
import HomePage from './components/HomePage'

function App() {
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <div className="App">
      <header>
        <h1>Game Discovery</h1>
      </header>
      <HomePage />
    </div>
  );
}

export default App;
