import React, { useState } from 'react';
import style from "../car.module.css";


export default function RenderProfileCard({ picture, beard, moonshine, rodeo_buckles, truck_brand, mode_of_tobacco, pontoon_boat, security_goat, current_user_id, thisCardUserData }){
    const [isClicked, setIsClicked] = useState(false);
    const [car, setCar] = useState(false);
    const fullName = `${thisCardUserData.first_name} ${thisCardUserData.last_name} `;


    //console.log(thisCardUserData)


    function handleLike(e){
        //e.preventDefault();
        const likeObj = {
            user_id: current_user_id,
            received_id: thisCardUserData.id
            //match_id: 1
        }
        console.log(likeObj)
        console.log('current user', current_user_id)
        console.log('that profile', thisCardUserData.id)
        fetch('/likes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(likeObj)
        })
        .then(r => {
            if(r.ok){
                r.json().then(data => {
                    console.log(data)
                    console.log('a like was made')
                })
            } else {
                r.json().then(json => console.log(json.errors))
            }
        })
    }

    function handleDislike(e){
        //e.preventDefault();
        console.log('current user', current_user_id)
        console.log('that profile', thisCardUserData.id)
        fetch('/skips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sent_id: current_user_id,
                received_id: thisCardUserData.id,
            })
            .then(r => {
                if(r.ok){
                    r.json().then(data => {
                        console.log(data)
                        console.log('me no likey')
                    })
                } else {
                    r.json().then(json => console.log(json.errors))
                }
            })
        })
    }

    const profileCardFront = (
        <>      

            <div className="py-5 mx-14">
            <img
                src={picture}
                alt={"where the picture will be"}
                className="rounded-[50%] w-32 m-auto mt-4 my-20 object-cover mb-2 h-32"
            />
            </div>
            {/* <h2>{thisCardUserData.first_name}</h2> */}
            <h4 className="ml-[10%] text-mg pt-5 text-black font-bold w-fit">{fullName}<span className="p-0 m-0 w-fit text-sm text-gray-600">{'age'}</span></h4>
            <p className="ml-[10%] text-sm text-gray-600 font-bold">Truck Brand: {truck_brand}</p>
            <div className="flex [&>*]:mx-[8%] [&>*]:hover:cursor-pointer flex-row items-center mx-auto py-5 w-full justify-center pb-5 mt-2">
                <img onClick={() => handleLike()} className="h-10 w-10" src="https://cdn-icons-png.flaticon.com/512/1182/1182720.png"/>
                <img onClick={() => handleDislike()} className="h-10 w-10" src="https://cdn-icons-png.flaticon.com/512/1533/1533919.png"/>
                <img onClick={() => setIsClicked(!isClicked)} src="https://cdn-icons-png.flaticon.com/512/5791/5791540.png" className="h-10 w-10" alt="flip"/>
            </div>
        </>
    )

    const profileCardBack = (
        <>
            <img className="rounded-md w-[90%] h-32 m-auto mt-4 mb-2" alt={"where the picture will be"} src="https://www.chevytrucklegends.com/content/dam/Projects/timeline/1967/01_images/truck-centenninal-mh-1967.png"/>
            <h2>{thisCardUserData.first_name} {thisCardUserData.last_name}</h2>
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
        <div className="w-fit ml-20 my-10 bg-white/70 backdrop-blur-sm rounded-md relative flex flex-col">
        {isClicked ? profileCardBack : profileCardFront}
            {/* <img id={style.car} className="h-10 w-10 absolute bottom-2 z-10" src="https://cdn-icons-png.flaticon.com/512/5440/5440927.png" alt="car"/>
            <img className="h-20 ml-4 -bottom-3 absolute z-0" src="https://cdn-icons-png.flaticon.com/512/358/358726.png" alt="road"/>
            <div className="h-20 ml-4 -bottom-3 absolute z-0">

            </div>
            <img className="h-20 ml-14 -bottom-3 absolute z-0" src="https://cdn-icons-png.flaticon.com/512/358/358726.png" alt="road"/> */}
        </div>
    )
}