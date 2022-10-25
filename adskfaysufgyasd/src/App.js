import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login'
import Browsing from './components/browsing';

function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={
            <Login />
          }/>
          <Route path="/dating" element={
            <Browsing />
          }/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;