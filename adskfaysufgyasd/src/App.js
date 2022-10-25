import {useEffect, useState} from 'react'
import Login from './components/login'
import Profile from './components/profile'
import Browsing from './components/browsing'
import LikesMatches from './components/likesmatches'
import About from './components/about'
import NavBar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/signup';

function App() {
  const [allProfiles, setAllProfiles] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setCurrentUser(user);
          fetchProfiles()
          console.log(currentUser)
        });
      }
    })
  },[])

  const fetchProfiles = () => {
    fetch('/profiles')
    .then(res => {
      if(res.ok){
        res.json().then(setAllProfiles)
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }
  
  return (
    <div>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" element={
            <Login />
          }/>

         <Route exact path="/signup" element={
            <Signup />
          }/>
          <Route exact path="/dating" element={
            <Browsing
              allProfiles={allProfiles}
            />
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