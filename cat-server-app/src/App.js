import logo from './logo.svg';
import './App.css';
import React, { useState, useContext } from 'react';
import { CatContext } from './CatContext';
import {Cat} from './Cat';

function App() {
  const [cat, setCat] = useState([]);

  fetch('http://localhost:8082/cats')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setCat(data)
    })

const gettersSetters = {
  cat, setCat
}

  return (
    <CatContext.Provider value={gettersSetters}>
      <Cat />

    </CatContext.Provider>

  );
}

export default App;
