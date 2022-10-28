import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from "uuid";


export default function LikeMatchLogic({currentUser, allProfiles, allLikes, allMatches, onFilterMatches, onFilterLikes}){
    

    useEffect(() => {
        filterMatches()
    },[])
    
    
    const filterMatches = () => {
        console.log(allProfiles)
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
        filteredLikes(forcedStateArray)
        onFilterMatches(forcedStateArray)
    }

    const filteredLikes = (forcedStateArray) => {
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

      if (forcedStateArray.length > 0) {
        let exludingExsistingMatches = []
        forcedStateArray.forEach(profile => {
          relevantLikerProfiles.forEach(likerProfile => {
            if (likerProfile.user_id != profile.user_id) {
              exludingExsistingMatches.push(likerProfile)
            }
          })
        })

        let uniqLikes = [...new Set(exludingExsistingMatches)];
        onFilterLikes(uniqLikes)
      } else {
        onFilterLikes(relevantLikerProfiles)
      }

    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // const [errors, setErrors] = useState(false)
    // const navigate = useNavigate();

    // // array of profiles of everyone who has liked the current user 
    // const [whoLikesUser, setWhoLikesUser] = useState([])
    
    // // array of profiles of everyone who has liked that user
    // const [userMatches, setUserMatches] = useState([])
    
    // // array of account ids of everyone who the current user has skipped
    // const [userSkips, setUserSkips] = useState([])
    
    // // array of account ids of everyone who has skipped the current user
    // const [whoSkippedUser, setWhoSkippedUser] = useState([])
    
    // // array of account ids of everyone who the current user has liked
    // const [userLikes, setUserLikes] = useState([])

    // useEffect(() => {
    //   //settingWhoLikesUserDrama()
    //   settingInitialMatchesDrama()
    // },[])

    // function settingInitialMatchesDrama() {
    //   let forcedStateArray = []
    //   let truthyMatches = allMatches.filter(match => match.didtheymatch == true)
    //   truthyMatches.forEach(trueMatch => {
    //     allProfiles.forEach(profile => {
    //       if (trueMatch.user2_id == currentUser.id && trueMatch.user1_id == profile.user_id) {
    //         console.log('profiles that are already matched', profile)
    //         forcedStateArray.push(profile)
    //       }
    //     })
    //   })
    //   //console.log(forcedStateArray)
    //   //let uniqMatches = [...new Set(forcedStateArray)];
    //   setUserMatches(() => forcedStateArray)
    //   settingWhoLikesUserDrama(forcedStateArray)
    // }


    // function settingWhoLikesUserDrama(forcedStateArray) {

    //   // finds the entries from all the like instances in the db that pertain to the current user
    //   let relevantLikeEntries = allLikes.filter(like => like.received_id == currentUser.id)
    //   // console.log('relevnat likes', relevantLikeEntries)

    //   // extracts the ids of the users who sent the current user a like
    //   let relevantLikerID = []
    //   relevantLikeEntries.forEach(like => relevantLikerID.push(like.user_id))
    //   //console.log(relevantLikerID)

    //   // updates state of all of the profiles who like the current user by going through id array and finding the profile
    //   let relevantLikerProfiles = []
    //   relevantLikerID.forEach(id => {
    //     allProfiles.forEach(profile => {
    //       if (profile.user_id == id ) {
    //         relevantLikerProfiles.push(profile)
    //       }
    //     })
    //   })

    //   if (forcedStateArray.length >= 0) {
    //     let exludingExsistingMatches = []
    //     forcedStateArray.forEach(profile => {
    //       relevantLikerProfiles.forEach(likerProfile => {
    //         if (likerProfile.user_id != profile.user_id) {
    //           exludingExsistingMatches.push(likerProfile)
    //         }
    //       })
    //     })

    //     let uniqLikes = [...new Set(exludingExsistingMatches)];
    //     setWhoLikesUser(() => uniqLikes)
    //   } else {
    //     setWhoLikesUser(relevantLikerProfiles)
    //   }

    // }

    // const handleMakeAMatch = (match) => {
    //   const newTruth = {
    //     didtheymatch: true
    //   }
    //   fetch(`/matches/${match.id}`,{
    //     method:'PATCH',
    //     headers: {'Content-Type': 'application/json'},
    //     body:JSON.stringify(newTruth)
    //   })
    //   .then(res => {
    //     if(res.ok){
    //       res.json().then(updateMatches)
    //       console.log('howdy from an updated match')
    //     } else {
    //       //Display errors
    //       res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
    //     }
    //   })

    //   allProfiles.forEach(profile => {
    //     if (profile.user_id == match.user1_id) {
    //       setUserMatches(() => [...userMatches, profile])
    //     }
    //   })

    //   // very VERY undry code but running out of time ya know?
    //   let excludeTheMatches = []
    //   whoLikesUser.forEach(likerProfile =>{
    //     if (likerProfile.user_id != match.user1_id) {
    //       excludeTheMatches.push(likerProfile)
    //     }
    //   })


    //   let uniqLikes = [...new Set(excludeTheMatches)];
    //   setWhoLikesUser(() => uniqLikes)

    // }

    

    return (
        <div>
        </div>
    )
}