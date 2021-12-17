import React from 'react';
import CoolComponent from "./components/CoolComponent";
import Store from './components/Store'
import './App.css';


function App() {
  return (
    <Store>
      <CoolComponent />
    </Store>
  );
}

export default App;
