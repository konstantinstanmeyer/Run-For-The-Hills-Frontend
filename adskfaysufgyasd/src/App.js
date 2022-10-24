import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [data, setData] = useState("")

  console.log(data)

  function handleSubmit(e){
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    }
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(r => {
      if(r.ok){
        r.json().then(data => {
          setData(data)
        })
      } else {
        r.json().then(json => console.log(Object.entries(json.errors)))
      }
    })
    .catch(err => console.log(err))
    .finally(data => {
      setData(data)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="email"></input>
        <input  value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password"></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
