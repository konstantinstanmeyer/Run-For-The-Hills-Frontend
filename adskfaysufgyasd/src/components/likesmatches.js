import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from "uuid";

import SimpleLikesCard from './simpleLikesCard';

export default function LikesMatches({ currentUser, allProfiles, allLikes, allMatches }){


    const navigate = useNavigate();

    // array of profiles of everyone who has liked the current user 
    const [whoLikesUser, setWhoLikesUser] = useState([])
    
    // array of account ids of everyone who has liked that user
    const [userMatches, setUserMatches] = useState([])
    
    // array of account ids of everyone who the current user has skipped
    const [userSkips, setUserSkips] = useState([])
    
    // array of account ids of everyone who has skipped the current user
    const [whoSkippedUser, setWhoSkippedUser] = useState([])
    
    // array of account ids of everyone who the current user has liked
    const [userLikes, setUserLikes] = useState([])

    // console.log('currnet user from LM', currentUser)
    // console.log('all likes from LM', allLikes)
    // console.log('all profile user IDs from LM', allProfiles)
    // console.log('all matches from LM', allMatches)

    useEffect(() => {
      settingWhoLikesUserDrama()
    },[])


    function settingWhoLikesUserDrama() {

      // finds the entries from all the like instances in the db that pertain to the current user
      let relevantLikeEntries = allLikes.filter(like => like.received_id == currentUser.id)
      // console.log('relevnat likes', relevantLikeEntries)

      // extracts the ids of the users who sent the current user a like
      let relevantLikerID = []
      relevantLikeEntries.forEach(like => relevantLikerID.push(like.user_id))

      // updates state of all of the profiles who like the current user by going through id array and finding the profile
      let relevantLikerProfiles = []
      relevantLikerID.forEach(id => {
        allProfiles.forEach(profile => {
          if (profile.user_id == id) {
            relevantLikerProfiles.push(profile)
          }
        })
      })

      console.log('the liker profiles', relevantLikerProfiles)
      setWhoLikesUser(() => relevantLikerProfiles)

    }


    




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




    // fetch like data -> whever the recieved_id is == to the current_user_id is people who have already liked the current user
    // useEffect(() => {
    //     console.log(currentUser)
    //     fetch("/likes")
    //     .then((res) => {
    //       if (res.ok) {
    //         res.json().then((likeData) => {
    //           //console.log(likeData)
    //           // let relevantLikeData = likeData.filter(like => like.recieved_id == currentUser.id)
    //           // console.log('relevant likes:', relevantLikeData)
    //           // set who likes user array
    //           // likeData.forEach((like) {
    //           //   setWhoLikesUser([...whoLikesUser,() => allProfiles.filter(profile => profile['user'].id == like.)]
    //           // })
    //           handleLikeDrama(likeData)
    //         });
    //       }
    //     })
    //     fetch("/matches")
    //     .then((res) => {
    //       if (res.ok) {
    //         res.json().then((matchData) => {
    //           //console.log(matchData)
    //         });
    //       }
    //     })
    //     fetch("/skips")
    //     .then((res) => {
    //       if (res.ok) {
    //         res.json().then((skipData) => {
    //           //console.log(skipData)
    //         });
    //       }
    //     })
    //   },[])