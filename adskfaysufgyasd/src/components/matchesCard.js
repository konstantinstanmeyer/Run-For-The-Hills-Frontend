import React, { useState } from 'react';
import style from "../car.module.css";


export default function MatchesCard({ picture, firstName, lastName, moonshine, beard, rodeo_buckles, truck_brand, security_goat, pontoon_boat, mode_of_tobacco }){
    

    return(
        <div className="w-1/4 h-2/4 ml-20 my-10 bg-white/70 backdrop-blur-sm rounded-md relative flex flex-col">
            <img
                src={picture}
                alt={"where the picture will be"}
                className="rounded-md w-[90%] m-auto mt-4 mb-2"
            />
           <h2>{firstName} {lastName}</h2>
            <p>Truck Brand: {truck_brand}</p>
            <p>Beard Length 🧔‍♀️ : {beard}</p>
            <p>Preffered Tobaccy 🚬: {mode_of_tobacco}</p>
            <p>Moonshine Strength 💪: {moonshine}</p>
            <p>Pontoon Boat 🛥️ ?: {pontoon_boat ? "hell yeah" : "no way jose"} </p>
            <p className="ml-[5%] text-sm text-gray-600 font-bold">Security Goat 🐐 ?: {security_goat ? "hell yeah" : "no way jose"}</p>
            <p className="ml-[5%] text-sm text-gray-600 font-bold">I have {rodeo_buckles} buckles 😎 🏇 😤</p>
        </div>
    )
}