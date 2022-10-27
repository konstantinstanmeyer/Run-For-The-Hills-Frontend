import React, { useState } from 'react';
import style from "../car.module.css";


export default function SimpleLikesCard({ picture, firstName, lastName, moonshine, beard, rodeo_buckles, truck_brand, security_goat, pontoon_boat, mode_of_tobacco, current_user_id, thisCardUserData, allMatches, onMakeAMatch }){
    
    const [isClicked, setIsClicked] = useState(false);

    let potentialMatches = allMatches.filter(match => match.user2_id == current_user_id)

    function handleLikeBack() {
        console.log(potentialMatches)
        potentialMatches.forEach(match => {
            //console.log(match)
            if (match.user1_id == thisCardUserData.id) {
                onMakeAMatch(match)
            }
        })
    }



    const profileCardFront = (
        <>
            <img
                src={picture}
                alt={"where the picture will be"}
                className="rounded-md w-[90%] m-auto mt-4 mb-2"
            />
            <h4 className="ml-[5%] text-mg text-black font-bold w-fit">{firstName} <span className="p-0 m-0 w-fit text-sm text-gray-600">{'maybe where age will go'}</span></h4>
            <p className="ml-[5%] text-sm text-gray-600 font-bold">Truck Brand: {truck_brand}</p>
            <div className="flex [&>*]:mx-[8%] [&>*]:hover:cursor-pointer flex-row items-center w-full justify-center pb-2 mt-2">
                <img onClick={() => setIsClicked(!isClicked)} src="https://cdn-icons-png.flaticon.com/512/5791/5791540.png" className="h-10 w-10" alt="flip"/>
                <img onClick={() => handleLikeBack()} className="h-10 w-10" src="https://cdn-icons-png.flaticon.com/512/1182/1182720.png"/>
            </div>
        </>
    )

    const profileCardBack = (
        <>
            <h2>{firstName} {lastName}</h2>
            <p>Beard Length 🧔‍♀️ : {beard}</p>
            <p>Preffered Tobaccy 🚬: {mode_of_tobacco}</p>
            <p>Moonshine Strength 💪: {moonshine}</p>
            <p>Pontoon Boat 🛥️ ?: {pontoon_boat ? "hell yeah" : "no way jose"} </p>
            <p className="ml-[5%] text-sm text-gray-600 font-bold">Security Goat 🐐 ?: {security_goat ? "hell yeah" : "no way jose"}</p>
            <p className="ml-[5%] text-sm text-gray-600 font-bold">I have {rodeo_buckles} buckles 😎 🏇 😤</p>
            <img onClick={() => setIsClicked(!isClicked)} src="https://cdn-icons-png.flaticon.com/512/5791/5791540.png" className="h-10 w-10" alt="flip"/>
        </>

    )

    return(
        <div className="w-1/4 h-2/4 ml-20 my-10 bg-white/70 backdrop-blur-sm rounded-md relative flex flex-col">
            {isClicked ? profileCardBack : profileCardFront}
        </div>
    )
}