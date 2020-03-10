import React from 'react';
import logo from './logo.svg';
import './App.css';
import GussedWords from './GuessWords';
import Congrats from './Congrats';

function App() {
  const guessedWords = []
  return (
    <div className="App">
      <Congrats success={false}/>
      <GussedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
