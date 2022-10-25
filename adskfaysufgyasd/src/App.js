import React from 'react';
import Login from './components/login'
import Profile from './components/profile'
import Browsing from './components/browsing'
import LikesMatches from './components/likesmatches'
import About from './components/about'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

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
          <Route path="/likesmatches" element={
            <LikesMatches />
          }/>
          <Route path="/profile" element={
            <Profile />
          }/>
          <Route path="/about" element={
            <About />
          }/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;