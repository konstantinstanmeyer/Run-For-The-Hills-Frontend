import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileForm from './profileform';

export default function Profile({currentUser}){

    const navigate = useNavigate();

    const [clicked, setClicked] = useState(true)

    //console.log(currentUser.profile)
    console.log(currentUser)

    return(
        <div>
            <button onClick={() => setClicked(!clicked)}> 
                <p>Edit Your Profile!</p>
            </button>
            {clicked ? 
                null 
                : 
                <ProfileForm restTYPE={'PATCH'}/>
            }
        </div>

    )
    
}