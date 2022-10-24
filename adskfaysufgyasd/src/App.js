import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
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