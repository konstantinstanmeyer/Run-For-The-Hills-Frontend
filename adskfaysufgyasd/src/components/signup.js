import React, { useState } from 'react';
import ProfileForm from './profileform';
//import {useHistory} from 'react-router-dom'

export default function Signup({onFetchProfiles, addProfile }){

    const [data, setData] = useState("")
    const [emailCreate, setEmailCreate] = useState("")
    const [passwordCreate, setPasswordCreate] = useState("")
    const [firstNameCreate, setFirstNameCreate] = useState('')
    const [lastNameCreate, setLastNameCreate] = useState('')
    const [hasNotSubmitted, setHasNotSubmitted] = useState(true)
    const [errors, setErrors] = useState([])
    const [profileID, setProfileID] = useState('')

    //const history = useHistory()

    function handleSubmitCreate(e){
        e.preventDefault();
        const user = {
            email: emailCreate,
            password: passwordCreate,
            first_name: firstNameCreate,
            last_name: lastNameCreate
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
                setData(() => data)
                //history.push(`/users/${data.id}`)
                setHasNotSubmitted(() => false)
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
            <div id="singup-form">
                <p>Create Account</p>
                <form onSubmit={handleSubmitCreate}>
                    <input value={emailCreate} onChange={e => setEmailCreate(e.target.value)} type="text" placeholder="email"></input>
                    <input  value={passwordCreate} onChange={e => setPasswordCreate(e.target.value)} type="password" placeholder="password"></input>
                    <input  value={firstNameCreate} onChange={e => setFirstNameCreate(e.target.value)} type="text" placeholder="first name"></input>
                    <input  value={lastNameCreate} onChange={e => setLastNameCreate(e.target.value)} type="text" placeholder="last name"></input>
                    <button type="submit">submit</button>
                </form>
            </div>
            :
            <div>
                <p>Welcome to RFTH, {data.first_name}!</p>
                <p>Let's set up your profile to get you fishing for your perfect catch:</p>
                <ProfileForm
                    profileID={profileID}
                    userID={data.id}
                />
            </div>
        }
    </div>
    )
}

