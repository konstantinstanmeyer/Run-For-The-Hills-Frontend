import React, { useState } from 'react';

export default function RenderProfileCard({ picture, beard }){

    const [isClicked, setIsClicked] = useState(false)

    const profileCardFront = (
        <React.Fragment>
        <div>
              <button className="switch">Hereeee'sss Johnny!</button>
              <img
                 src={picture}
                 alt={"where the picture will be"}
              />
        </div>
        </React.Fragment>
    )

    const profileCardBack = (
        <React.Fragment>
        <div>
           <button className="switch"> NAME</button>
              <h2>{"idk"}</h2>
              <p>{"some more stuff"} </p>
              <p>Beard Length: {beard}</p>
              <p>Security Goat?: {"profile.security_goat?"}</p>
              <p>Pontoon Boat?: {"profile.pontoon_boat"} </p>
        </div>
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