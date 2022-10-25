import React, { useState } from 'react';

export default function RenderProfileCard({ picture, beard, moonshine, rodeo_buckles, truck_brand, mode_of_tobacco, pontoon_boat, security_goat, thisuser }){

    const [isClicked, setIsClicked] = useState(false)

    const profileCardFront = (
        <React.Fragment>
        <div>
              <button className="switch">
                <img
                    src={picture}
                    alt={"where the picture will be"}
                />
                {thisuser.first_name}
                <br/>
                I have {rodeo_buckles} buckles 😎 🏇 😤
              </button>
        </div>
        <br/>
        </React.Fragment>
    )

    const profileCardBack = (
        <React.Fragment>
        <div>
           <button className="switch">
              <h1>{thisuser.first_name} {thisuser.last_name}</h1>
              <p>Beard Length 🧔‍♀️ : {beard}</p>
              <p>Truck Brand 🛻: {truck_brand}</p>
              <p>Preffered Tobaccy 🚬: {mode_of_tobacco}</p>
              <p>Moonshine Strength 💪: {moonshine}</p>
              <p>Security Goat 🐐 ?: {security_goat ? "hell yeah" : "no way jose"}</p>
              <p>Pontoon Boat 🛥️ ?: {pontoon_boat ? "hell yeah" : "no way jose"} </p>
            </button>
        </div>
        <br/>
        </React.Fragment> 
    )

        
        

return(
    <div>
       <div className="profile card" onClick={() => setIsClicked(!isClicked)}>
            {isClicked ? profileCardBack : profileCardFront}
        </div>
    </div>
)

}