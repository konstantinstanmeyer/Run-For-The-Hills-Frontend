import React, { useState } from 'react';

export default function Signup(){
    const [data, setData] = useState({});
    const [email, setEmail] = useState("");
    const [closed, setClosed] = useState(false);
    const [password, setPassword] = useState("");

    function handleSubmitCreate(e){
        e.preventDefault();
        const user = {
            email: email,
            password: password,
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
                console.log(data)
            })
            } else {
            r.json().then(json => console.log(json.errors))
            }
        })
    }   

    return (
    <div className="fixed h-screen w-screen bg-[url(https://images.unsplash.com/photo-1590930180621-fc7027a21559?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80)]">
      <div className="bg-lime-300/30 overflow-auto backdrop-blur-sm relative top-[20%] m-auto w-1/2 h-2/3 rounded-md">
        <h2 className="text-center mb-8 mt-12 text-4xl font-bold text-white">Sign Up</h2>
        <div className="flex flex-col justify-center">
        <form className="relative flex justify-center flex-col" onSubmit={handleSubmitCreate}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter a valid email address" className="w-1/2 indent-3 py-5 rounded-md mx-auto my-5"/>
            <input type={closed ? "password" : "text"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter a valid password" className="w-1/2 indent-3 py-5 rounded-md mx-auto my-5"/>
            <button type="submit" className="w-1/2 bg-white mx-auto my-5 rounded-md relative">submit</button>
            <img onClick={() => setClosed(!closed)} className="h-8 w-8 absolute right-[28%] bottom-[36%]" src={closed ? "https://cdn-icons-png.flaticon.com/512/2356/2356734.png" : "https://cdn-icons-png.flaticon.com/512/709/709612.png"}/>
        </form>
        </div>
      </div>
    </div>
    )
}

