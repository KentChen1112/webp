import React from 'react';
import Component from './component/Component';
import './App.css';
import ImageAvatars from './component/Header.js';


function App() {
  return (
    <div className="App">
      <div>
        <ImageAvatars/>
        <Component/>
      </div>
    </div>
  );
}

export default App;
