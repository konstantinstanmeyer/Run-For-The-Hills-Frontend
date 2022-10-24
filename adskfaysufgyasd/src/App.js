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
    const controller = new AbortController();
    fetch('/login', { signal: controller.signal})
    .then(r => r.json())
    .catch(err => console.log(err))
    .finally(data => {
      setData(data)
    })

    return () => {
      controller.abort();
    }
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
