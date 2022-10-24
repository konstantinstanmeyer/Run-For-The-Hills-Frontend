import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [data, setData] = useState("")
  const [emailCreate, setEmailCreate] = useState("")
  const [passwordCreate, setPasswordCreate] = useState("")

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
  }

  function handleSubmitCreate(e){
    e.preventDefault();
    const user = {
      email: emailCreate,
      password: passwordCreate,
    }
    fetch('/users', {
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
  }

  return (
    <div>
      <p>sign in:</p>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="email"></input>
        <input  value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password"></input>
        <button type="submit">submit</button>
      </form>
      <br/>
      <p>create users:</p>
      <form onSubmit={handleSubmitCreate}>
        <input value={emailCreate} onChange={e => setEmailCreate(e.target.value)} type="text" placeholder="email"></input>
        <input  value={passwordCreate} onChange={e => setPasswordCreate(e.target.value)} type="password" placeholder="password"></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
