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
                setData(data => data)
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
            res.json().then(console.log(res))
            console.log('hwody')
          }else {
            res.json().then(data => setErrors(data.error))
          }
        })
    }

    // const [profileData, setProfileData] = useState({
    //     beard_length: undefined,
    //     truck_brand:'',
    //     mode_of_tobacco:'',
    //     moonshine_abv_level: undefined,
    //     security_goat?: undefined,
    //     pontoon_boat?: undefined,
    //     profile_picture: '',
    //     photo_png: '',
    //     rodeo_buckles: undefined,
    //     user_id: userData.id
    // })


    

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
                    // restTYPE={'POST'}
                    // userData={data}
                    // addProfile={addProfile}
                />
            </div>
        }
    </div>
    )
}

