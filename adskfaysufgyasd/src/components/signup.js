import React, { useState } from 'react';

export default function Signup(){

    const [data, setData] = useState("")
    const [emailCreate, setEmailCreate] = useState("")
    const [passwordCreate, setPasswordCreate] = useState("")

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
            r.json().then(json => console.log(json.errors))
            }
        })
    }   

    return (
    <div>
      <p>create users:</p>
      <form onSubmit={handleSubmitCreate}>
        <input value={emailCreate} onChange={e => setEmailCreate(e.target.value)} type="text" placeholder="email"></input>
        <input  value={passwordCreate} onChange={e => setPasswordCreate(e.target.value)} type="password" placeholder="password"></input>
        <button type="submit">submit</button>
      </form>
    </div>
    )
}
