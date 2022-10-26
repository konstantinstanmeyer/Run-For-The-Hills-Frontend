import React, { useState } from 'react';
import ProfileForm from './profileform';
//import {useHistory} from 'react-router-dom'

export default function Signup({onFetchProfiles, addProfile, updateProfile }){
    const [closed, setClosed] = useState(true);
    const [data, setData] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [hasNotSubmitted, setHasNotSubmitted] = useState(true);
    const [errors, setErrors] = useState([]);
    const [profileID, setProfileID] = useState('');

    //const history = useHistory()

    function handleSubmitCreate(e){
        e.preventDefault();
        const user = {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName
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
                console.log(data)
                createEmptyProfile(data.id)
                setData(data)
                //history.push(`/users/${data.id}`)
                setHasNotSubmitted(false)
                onFetchProfiles()
            })
            } else {
            r.json().then(json => console.log(json.errors))
            }
        })
    } 

    const createEmptyProfile = (id) => {
        const blankObj = {
            user_id: id
        }
        console.log(blankObj.user_id)
        fetch('/profiles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(blankObj)
        })
        .then(res => {
          if(res.ok){
            res.json().then(data2 => {
            addProfile()
            console.log(data2)
            setProfileID(() => data2.id)
            console.log('hwody')
            })
          } else {
            res.json().then(data2 => setErrors(data2.error))
          }
        })
    }
    

    return (
    <div>
        {hasNotSubmitted ?
            <div className="fixed h-screen w-screen bg-[url(https://images.unsplash.com/photo-1590930180621-fc7027a21559?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80)]">
            <div className="bg-lime-300/30 overflow-auto backdrop-blur-sm relative top-[20%] m-auto w-1/2 h-2/3 rounded-md">
              <h2 className="text-center mb-8 mt-12 text-4xl font-bold text-white">Sign Up</h2>
              <div className="flex flex-col justify-center">
              <form className="relative flex justify-center flex-col" onSubmit={handleSubmitCreate}>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter a valid email address" className="w-1/2 indent-3 py-5 rounded-md mx-auto my-5"/>
                  <input type={closed ? "password" : "text"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter a valid password" className="w-1/2 indent-3 py-5 rounded-md mx-auto my-5"/>
                  <input className="w-1/2 indent-3 py-5 rounded-md mx-auto my-5" value={firstName} onChange={e => setFirstName(e.target.value)} type="text" placeholder="first name"></input>
                  <input className="w-1/2 indent-3 py-5 rounded-md mx-auto my-5" value={lastName} onChange={e => setLastName(e.target.value)} type="text" placeholder="last name"></input>
                  <button type="submit" className="w-1/2 bg-white mx-auto my-5 rounded-md relative">submit</button>
                  <img onClick={() => setClosed(!closed)} className="h-8 w-8 absolute right-[28%] bottom-[64%]" src={closed ? "https://cdn-icons-png.flaticon.com/512/2356/2356734.png" : "https://cdn-icons-png.flaticon.com/512/709/709612.png"}/>
              </form>
              </div>
            </div>
          </div>
            :
            <div>
                <p>Welcome to RFTH, {data.first_name}!</p>
                <p>Let's set up your profile to get you fishing for your perfect catch:</p>
                <ProfileForm
                    profileID={profileID}
                    userID={data.id}
                    updateProfile={updateProfile}
                />
            </div>
        }
    </div>
)}