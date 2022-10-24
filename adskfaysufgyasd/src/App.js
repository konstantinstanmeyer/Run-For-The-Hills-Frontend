import logo from './logo.svg';
import React from 'react';
import Login from './components/login'
import Profile from './components/profile'
import Browsing from './components/browsing'
import LikesMatches from './components/likesmatches'
import About from './components/about'
import NavBar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  
  return (

    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/login" element={
            <Login />
          }/>
          <Route exact path="/browsing" element={
            <Browsing />
          }/>
          <Route exact path="/likesmatches" element={
            <LikesMatches />
          }/>
          <Route exact path="/profile" element={
            <Profile />
          }/>
          <Route exact path="/about" element={
            <About />
          }/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;