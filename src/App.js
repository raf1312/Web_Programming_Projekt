import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Find_cocktail from "./Component/Find_Cocktail/Find_cocktail"

function App() {
  return (
      <BrowserRouter>
        <Find_cocktail/>
      </BrowserRouter>
  );
}

export default App;
