import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from "uuid";

import SimpleLikesCard from './simpleLikesCard';

export default function LikesMatches({ currentUser }){

    console.log(currentUser)

    const navigate = useNavigate();

    // 
    const [whoLikesUser, setWhoLikesUser] = useState([])
    const [userMatches, setUserMatches] = useState([])
    const [userSkips, setUserSkips] = useState([])
    const [whoSkipped, setWhoSkipped] = useState([])
    const [userLikes, setUserLikes] = useState([])

    // fetch like data -> whever the recieved_id is == to the current_user_id is people who have already liked the current user
    useEffect(() => {
        fetch("/likes")
        .then((res) => {
          if (res.ok) {
            res.json().then((likeData) => {
              console.log(likeData)
            });
          }
        })
        fetch("/matches")
        .then((res) => {
          if (res.ok) {
            res.json().then((matchData) => {
              console.log(matchData)
            });
          }
        })
        fetch("/skips")
        .then((res) => {
          if (res.ok) {
            res.json().then((skipData) => {
              console.log(skipData)
            });
          }
        })
      },[])

    return (
        <div>
            <br/><br/>
            <div>
                ooohhhh someone likes you....
            </div>
            <div id="who-likes-user-list" className="w-3/4 flex flex-wrap mt-20 ml-auto">
                {whoLikesUser.map((eachProfile) =>
                        <SimpleLikesCard
                            key={uuid()}
                            picture={eachProfile.profile_picture}
                            beard={eachProfile.beard_length}
                            moonshine={eachProfile.moonshine_abv_level}
                            rodeo_buckles={eachProfile.rodeo_buckles}
                            truck_brand={eachProfile.truck_brand}
                            mode_of_tobacco={eachProfile.mode_of_tobacco}
                            pontoon_boat={eachProfile['pontoon_boat?']}
                            security_goat={eachProfile['security_goat?']}
                            firstName={eachProfile['user'].first_name}
                            lastName={eachProfile['user'].last_name}
                        />
                    )
                }
            </div>

            <br/><br/>
            
            <br/><br/>
            <button onClick={() => navigate("/profile")}>
                    Return to Your Profile
            </button>
            <br/><br/>
            <button onClick={() => navigate("/dating")}>
                    Search the Haystack!
            </button>
        </div>
    )
}