import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from "uuid";

import SimpleLikesCard from './simpleLikesCard';
import MatchesCard from './matchesCard';

export default function LikesMatches({ currentUser, allProfiles, allLikes, allMatches, updateMatches }){

    const [errors, setErrors] = useState(false)
    const navigate = useNavigate();

    // array of profiles of everyone who has liked the current user 
    const [whoLikesUser, setWhoLikesUser] = useState([])
    
    // array of profiles of everyone who has liked that user
    const [userMatches, setUserMatches] = useState([])
    
    // array of account ids of everyone who the current user has skipped
    const [userSkips, setUserSkips] = useState([])
    
    // array of account ids of everyone who has skipped the current user
    const [whoSkippedUser, setWhoSkippedUser] = useState([])
    
    // array of account ids of everyone who the current user has liked
    const [userLikes, setUserLikes] = useState([])

    useEffect(() => {
      //settingWhoLikesUserDrama()
      settingInitialMatchesDrama()
    },[])

    function settingInitialMatchesDrama() {
      let forcedStateArray = []
      let truthyMatches = allMatches.filter(match => match.didtheymatch == true)
      truthyMatches.forEach(trueMatch => {
        allProfiles.forEach(profile => {
          if (trueMatch.user2_id == currentUser.id && trueMatch.user1_id == profile.user_id) {
            console.log('profiles that are already matched', profile)
            forcedStateArray.push(profile)
          }
        })
      })
      //console.log(forcedStateArray)
      //let uniqMatches = [...new Set(forcedStateArray)];
      setUserMatches(() => forcedStateArray)
      settingWhoLikesUserDrama(forcedStateArray)
    }


    function settingWhoLikesUserDrama(forcedStateArray) {

      // finds the entries from all the like instances in the db that pertain to the current user
      let relevantLikeEntries = allLikes.filter(like => like.received_id == currentUser.id)
      // console.log('relevnat likes', relevantLikeEntries)

      // extracts the ids of the users who sent the current user a like
      let relevantLikerID = []
      relevantLikeEntries.forEach(like => relevantLikerID.push(like.user_id))
      //console.log(relevantLikerID)

      // updates state of all of the profiles who like the current user by going through id array and finding the profile
      let relevantLikerProfiles = []
      relevantLikerID.forEach(id => {
        allProfiles.forEach(profile => {
          if (profile.user_id == id ) {
            relevantLikerProfiles.push(profile)
          }
        })
      })

      if (forcedStateArray.length >= 0) {
        let exludingExsistingMatches = []
        forcedStateArray.forEach(profile => {
          relevantLikerProfiles.forEach(likerProfile => {
            if (likerProfile.user_id != profile.user_id) {
              exludingExsistingMatches.push(likerProfile)
            }
          })
        })

        let uniqLikes = [...new Set(exludingExsistingMatches)];
        setWhoLikesUser(() => uniqLikes)
      } else {
        setWhoLikesUser(relevantLikerProfiles)
      }

    }

    const handleMakeAMatch = (match) => {
      //console.log(match)
      const newTruth = {
        didtheymatch: true
      }
      fetch(`/matches/${match.id}`,{
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(newTruth)
      })
      .then(res => {
        if(res.ok){
          res.json().then(updateMatches)
          console.log('howdy from an updated match')
        } else {
          //Display errors
          res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }
      })

      allProfiles.forEach(profile => {
        if (profile.user_id == match.user1_id) {
          setUserMatches(() => [...userMatches, profile])
        }
      })

      // very VERY undry code but running out of time ya know?
      let excludeTheMatches = []
      whoLikesUser.forEach(likerProfile =>{
        if (likerProfile.user_id != match.user1_id) {
          excludeTheMatches.push(likerProfile)
        }
      })


      let uniqLikes = [...new Set(excludeTheMatches)];
      setWhoLikesUser(() => uniqLikes)


      
      //setWhoLikesUser(() => [whoLikesUser.filter(profile => profile.user_id != match.user1_id)])
      //console.log(whoLikesUser)
      //console.log(whoLikesUser.filter(profile => profile.user_id != match.user1_id))

      //setUserMatches(() => [...userMatches, allMatches.filter(match => match.didtheymatch == true)])
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
                            thisCardUserData={eachProfile['user']}
                            current_user_id={currentUser.id}
                            allMatches={allMatches}
                            onMakeAMatch={(match) => handleMakeAMatch(match)}
                        />
                    )
                }
            </div>

            <br/><br/>
            <div>
                you got some steammmmmyy matches dammnn....
            </div>
            <div id="who-likes-user-list" className="w-3/4 flex flex-wrap mt-20 ml-auto">
                {userMatches.map((eachProfile) =>
                        <MatchesCard
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


