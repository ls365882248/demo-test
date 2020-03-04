import React from 'react';
import axios from 'axios';
import { Button } from 'antd';
import './App.css';

const { useState } = React;
function App() {
  const [message, setMessage] = useState("init message");
  const getData = () => {
    axios.get('/api', {}).then((res) => {
      setMessage(res.data);
    })
  }
  return (
    <div className="App">
      <header>
        测试页面
      </header>
      <main>
        <Button type="primary" onClick={getData}>
          Click me!
        </Button>
        <p>{message}</p>
      </main>
      <footer>
      </footer>  
    </div>
  );
}

export default App;
