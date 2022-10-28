import {useEffect, useState} from 'react'
import Login from './components/login'
import Profile from './components/profile'
import Browsing from './components/browsing'
import LikesMatches from './components/likesmatches'
import About from './components/about'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/signup'
import LikeMatchLogic from './components/likeMatchLogic'

function App() {
  const [allProfiles, setAllProfiles] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [allLikes, setAllLikes] = useState([])
  const [filteredLikes, setFilteredLikes] = useState([])
  const [allMatches, setAllMatches] = useState([])
  const [filteredMatches, setFilteredMatches] = useState([])
  const [allSkips, setAllSkips] = useState([])

  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setCurrentUser(user);
          fetchProfiles()
          fetchLikesMatchesSkips()
          console.log(currentUser)
        });
      }
    })
    
  },[])

  const fetchProfiles = () => {
    fetch('/profiles')
    .then(res => {
      if(res.ok){
        res.json().then(data => {
          setAllProfiles(() => [...allProfiles, data])
          fetchLikesMatchesSkips(data)
        })
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  function fetchLikesMatchesSkips() {
    fetch('/likes')
    .then(res => {
      if(res.ok){
        res.json().then(data => {
          setAllLikes(data)
        })
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
    fetch('/matches')
    .then(res => {
      if(res.ok){
        res.json().then(data => {
          setAllMatches(data)
        })
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
    fetch('/skips')
    .then(res => {
      if(res.ok){
        res.json().then(setAllSkips)
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  const addProfile = (profile) => setAllProfiles(current => [...current, profile])

  const updateProfile = (updatedProfile) => setAllProfiles(current => {
    return current.map(profile => {
     if(profile.id === updatedProfile.id){
       return updatedProfile
     } else {
       return profile
     }
    })
  })

  const updateMatches = (updatedMatch) => setAllMatches(current => {
    return current.map(match => {
     if(match.id === updatedMatch.id){
       return updatedMatch
     } else {
       return match
     }
    })
  })
  
  return (
    <div>
      <LikeMatchLogic
        currentUser={currentUser}
        allLikes={allLikes}
        allMatches={allMatches}
        allProfiles={allProfiles}
        onFilterMatches={(filtM) => setFilteredMatches([...filteredMatches, filtM])}
        onFilterLikes={(filtL) => setFilteredLikes([...filteredLikes, filtL])}
      />
      <Router>
        <Routes>
          <Route exact path="/" element={
            <Login />
          }/>
         <Route exact path="/signup" element={
            <Signup 
              onFetchProfiles={() => fetchProfiles()}
              addProfile={addProfile}
              updateProfile={updateProfile}
            />
          }/>
          <Route exact path="/dating" element={
            <Browsing
              current_user_id={currentUser.id}
              allProfiles={allProfiles}
            />
          }/>
          <Route path="/likesmatches" element={
            <LikesMatches
              currentUser={currentUser}
              allProfiles={allProfiles}
              allLikes={allLikes}
              allMatches={allMatches}
              updateMatches={updateMatches}
            />
          }/>
          <Route path="/profile" element={
            <Profile
              currentUser={currentUser}
              updateProfile={updateProfile}
            />
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