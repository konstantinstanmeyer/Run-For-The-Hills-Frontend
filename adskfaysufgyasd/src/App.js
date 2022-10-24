import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  
  return (

    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={
            <Home />
          }/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;