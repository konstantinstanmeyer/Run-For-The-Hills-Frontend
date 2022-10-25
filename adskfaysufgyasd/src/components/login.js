import React, { useEffect, useState } from 'react';
import '../index.css'
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const background = document.querySelector('#login-background')
    const [closed, setClosed] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userData, setUserData] = useState([])
    const navigate = useNavigate();
    const [startedTyping, setStartedTyping] = useState(false)
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;


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
              setUserData(data)
              console.log(data)
            })
          } else {
            r.json().then(json => console.log(json.errors))
          }
        })
      }
   
        
    

    useEffect(() => {
        if (!startedTyping && email !== ""){
            setStartedTyping(true)
        }
    }, [email])

    return(
        <div>
            <img id="login-background" className="w-screen h-screen object-cover absolute -z-10" src="https://cdn.discordapp.com/attachments/615981164267569162/1034193434271035452/ryan-arnst-JtRXnUNWHt4-unsplash.jpg"/>
            <header className="flex flex-row items-center">
                <div className="absolute top-0 w-screen h-32 bg-white opacity-30 -z-10"></div>
                <img className="w-24 h-24 mt-3 ml-5" src="https://cdn-icons-png.flaticon.com/512/2072/2072141.png"/>
                <h2 className="text-white text-8xl ml-5 pt-5 w-fit"><strong>Run for the Hills</strong></h2><span className="relative top-[40px] text-lg text-white"><strong>.com</strong></span>
                <nav className="right-0 ml-auto pr-5">
                    <ul className="flex flex-row pt-5 text-white">
                        <li onClick={() => navigate('/home')} className="text-2xl mx-10 hover:cursor-pointer">
                            <strong>Home</strong>
                        </li>
                        <li onClick={() => navigate('/dating')} className="text-2xl mx-10 hover:cursor-pointer">
                            <strong>Dating</strong>
                        </li>
                        <li onClick={() => navigate('/blog')} className="text-2xl mx-10 hover:cursor-pointer">
                            <strong>Blog</strong>
                        </li>
                        <li onClick={() => navigate('/contact')} className="text-2xl mx-10 hover:cursor-pointer">
                            <strong>Contact Us</strong>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="h-[600px] w-1/4 bg-white float-right md:mr-44 mt-10 rounded-md sm:mr-2">
                <img className="h-24 w-24 m-auto mt-[20%] mb-5" src="https://cdn-icons-png.flaticon.com/512/6713/6713853.png"/>
                <h5 className="text-center text-xl pb-5"><strong>Enter RFTH</strong></h5>
                <form onSubmit={handleSubmit} className="relative flex flex-col justify-center">
                    <input className="h-10 w-2/3 border-4 rounded-md m-auto indent-3 py-5 my-3" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email..."/>
                    {!emailRegex.test(email) && startedTyping === true ? <p className="text-sm text-red-500 p-0 m-0 text-center top-[53%]">*please enter a valid email*</p> : null}
                    <input className="h-10 w-2/3 border-4 rounded-md m-auto indent-3 py-5 my-2" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password..." type={closed ? "password" : "text"}/>
                    <img onClick={() => setClosed(!closed)} className="h-6 w-6 relative ml-auto -top-11 right-[20%]" src={closed ? "https://cdn-icons-png.flaticon.com/512/2356/2356734.png" : "https://cdn-icons-png.flaticon.com/512/709/709612.png"}/>
                    <button className="rounded-md h-20 w-2/3 bg-[#58a3ff] m-auto text-2xl text-white">Sign In</button>
                </form>
                <p onClick={() => navigate("/signup")} className="text-center mt-1 hover:cursor-pointer">don't have an account? <i>Saddle up</i></p>
            </div>
            {/* <div className="fixed bottom-0 bg-white h-20 w-screen items-center">
                <h4 className="text-[70px]">Join now, its <strong>FREE</strong></h4>
            </div> */}
        </div>
    )
          
}

