import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileForm from './profileform';

export default function Profile({currentUser}){

    const navigate = useNavigate();

    const [clicked, setClicked] = useState(true)

    console.log('from porfile page',currentUser)

    return(
        <div>
            <br/><br/>
            <button onClick={() => navigate("/likesmatches")}>
                    Check out your catches!
            </button>
            <br/><br/>
            <button onClick={() => navigate("/dating")}>
                    Check out the eligible singles!
            </button>
            <br/><br/>
            <button onClick={() => setClicked(!clicked)}> 
                <p>Edit Your Profile!</p>
            </button>
            {clicked ? 
                null 
                : 
                <ProfileForm 
                    profileID={currentUser['profile'].id}
                    userID={currentUser.id}
                />
            }

        </div>

    )
    
}