import React, { useState } from 'react';
import style from "../car.module.css";


export default function RenderProfileCard({ picture, beard, moonshine, rodeo_buckles, truck_brand, mode_of_tobacco, pontoon_boat, security_goat, name, current_user_id, user_id, thisuser }){
    const [isClicked, setIsClicked] = useState(false);
    const [car, setCar] = useState(false);


    function handleLike(e){
        e.preventDefault();
        fetch('/likes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sent_id: current_user_id,
                received_id: user_id,
            })
            .then(r => {
                if(r.ok){
                    r.json().then(data => {
                        console.log(data)
                    })
                } else {
                    r.json().then(json => console.log(json.errors))
                }
            })
        })
    }

    function handleDislike(e){
        e.preventDefault();
        fetch('/skips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sent_id: current_user_id,
                received_id: user_id,
            })
            .then(r => {
                if(r.ok){
                    r.json().then(data => {
                        console.log(data)
                    })
                } else {
                    r.json().then(json => console.log(json.errors))
                }
            })
        })
    }

    const profileCardFront = (
        <>
            <img
                src={car ? "https://www.chevytrucklegends.com/content/dam/Projects/timeline/1967/01_images/truck-centenninal-mh-1967.png" : picture}
                alt={"where the picture will be"}
                className="rounded-md w-[90%] m-auto mt-4 mb-2"
            />
            <h4 className="ml-[5%] text-mg text-black font-bold w-fit">{name} <span className="p-0 m-0 w-fit text-sm text-gray-600">14</span></h4>
            <p className="ml-[5%] text-sm text-gray-600 font-bold">Truck Brand: {truck_brand}</p>
            <div className="flex [&>*]:mx-[8%] [&>*]:hover:cursor-pointer flex-row items-center w-full justify-center pb-2 mt-2">
                <img onClick={() => handleLike} className="h-10 w-10" src="https://cdn-icons-png.flaticon.com/512/1182/1182720.png"/>
                <img onClick={() => handleDislike} className="h-10 w-10" src="https://cdn-icons-png.flaticon.com/512/1533/1533919.png"/>
                <img onClick={() => setIsClicked(!isClicked)} src="https://cdn-icons-png.flaticon.com/512/5791/5791540.png" className="h-10 w-10" alt="flip"/>
            </div>
        </>
    )

    const profileCardBack = (
        <>
            <h2>{"full name"}</h2>
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
            {/* <img id={style.car} className="h-10 w-10 absolute bottom-2 z-10" src="https://cdn-icons-png.flaticon.com/512/5440/5440927.png" alt="car"/>
            <img className="h-20 ml-4 -bottom-3 absolute z-0" src="https://cdn-icons-png.flaticon.com/512/358/358726.png" alt="road"/>
            <div className="h-20 ml-4 -bottom-3 absolute z-0">

            </div>
            <img className="h-20 ml-14 -bottom-3 absolute z-0" src="https://cdn-icons-png.flaticon.com/512/358/358726.png" alt="road"/> */}
        </div>
    )
}