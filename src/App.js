import './App.css';
import Navbar from './components/Navbar';
import Textaria from './components/Textaria';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#171717';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Textaria heading="Enter your text" mode={mode} />
    </>
  );
}

export default App;
