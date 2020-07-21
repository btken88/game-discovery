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
      <footer>
        <p>Created by: <a href="https://www.linkedin.com/in/bryce-kennedy/">Bryce Kennedy</a>, <a href="https://www.linkedin.com/in/nyaradzo-bere/">Nyaradzo Bere</a>, <a href="https://www.linkedin.com/in/lynnamsbury/">Lynn Amsbury</a></p>
      </footer>
    </div>
  );
}

export default App;
