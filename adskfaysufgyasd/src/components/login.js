import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState("")

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
              console.log(data)
            })
          } else {
            r.json().then(json => console.log(json.errors))
          }
        })
      }

    return(
    <div>
        <p>sign in:</p>
        <form onSubmit={handleSubmit}>
            <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="email"></input>
            <input  value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password"></input>
            <button type="submit">submit</button>
        </form>
        <br/>
        <p>
            Don't have an account?    
            <Link to="/signup">Saddle UP!</Link>
        </p>
    </div>
    )
}