import React from 'react';
import axios from 'axios';
import './App.css';

function App() {
  axios.get('/').then((res) => {
    console.log(44444, res)
  })
  return (
    <div className="App">
      HELLO WORLD!!
    </div>
  );
}

export default App;
