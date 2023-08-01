import React, { useState, useRef } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const randomStyle = {
    display: "flex",
    color: "black",
    textAlign: "center",
    justifyContent: 'center',
  }

  const buttonStyle = {
    padding: '10px',
    fontWeight: '600',
  }

  const [joke, setJoke] = useState("");

  const getJoke = () => {
    axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
      setJoke(response.data.setup + " ... " + response.data.punchline)
    })
  }

  return (
    <div className="container">
      <h1>Click to display a joke!</h1>
      <p>{joke}</p>
      <div style={randomStyle}>
        <button onClick={getJoke} style={buttonStyle} className='animate'> Get Joke </button>
      </div>
   </div>
  );
}

export default App;
