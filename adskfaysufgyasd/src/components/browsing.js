import React, { useState } from 'react';
import RenderProfileCard from "./renderprofilecard";
import {v4 as uuid} from "uuid";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export default function Browsing({ allProfiles, current_user_id }) {
    const [like, setLike] = useState();
    const [dislike, setDislike] = useState();
    const [goatAmount, setGoatAmount]  = useState();
    const goatButton = document.querySelector('#goat')
    const boatButton = document.querySelector('#boat')
    const [goat, setGoat] = useState(false);
    const [boat, setBoat] = useState(false);
    const [birthaProximity, setBirthaProximity] = useState(0);
    const [moonshineAbv, setMoonshineAbv] = useState(0);
    const [buckles, setBuckles] = useState(0);
    const navigate = useNavigate();

    function handleGoatClick(){
        if(goat){
            goatButton.classList.remove('bg-lime-500')
            goatButton.classList.add('bg-red-500')
            setGoat(!goat)
        } else if (!goat){
            goatButton.classList.remove('bg-red-500')
            goatButton.classList.add('bg-lime-500')
            setGoat(!goat)
        }
    }

    function handleBoatClick(){
        if(boat){
            boatButton.classList.remove('bg-lime-500')
            boatButton.classList.add('bg-red-500')
            setBoat(!boat)
        } else if (!boat){
            boatButton.classList.remove('bg-red-500')
            boatButton.classList.add('bg-lime-500')
            setBoat(!boat)
        }
    }

    function checkProfile(profile){
        return profile.moonshine_abv_level >= moonshineAbv && profile.rodeo_buckles >= buckles
    }

    const displayedUsers = allProfiles.filter(checkProfile)
    console.log(allProfiles)

    if (current_user_id === undefined) return (
        <div className="">
            <img className="w-screen h-screen object-cover bg-bottom fixed -z-10" src="https://www.onegreenplanet.org/wp-content/uploads/2018/02/screen-shot-2018-02-02-at-10-12-53-am.png"/>
        </div>
    )

    console.log(displayedUsers)
    return (
        <div className="">
            <img className="w-screen h-screen object-cover bg-bottom fixed -z-10" src="https://images.unsplash.com/photo-1440428099904-c6d459a7e7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>     
            <div id="browsing-sidebar" className="fixed left-0 w-1/4 h-full bg-white/70 overflow-scroll backdrop-blur-sm shadow-[0_0px_20px_-15px]">
                <h2 className="text-3xl font-bold text-center pt-[20%] pb-0">
                    Time to get spicy
                <br />
                    🌶️ 🫑 🥵
                </h2>
                <div className="mx-auto h-[3px] w-3/4 bg-gray-300 my-5"></div>
                <h3 className="text-xl text-center m-0 p-0">raise your standards!</h3>
                <div className="flex flex-col justify-center mb-3">
                    <h4 className="mx-auto text-lg font-bold py-2">Birtha Proximity</h4>
                    <div className="flex align-item w-2/3 mx-auto relative">
                        <p className="font-bold">none</p>
                        <input
                            id="range2"
                            value={birthaProximity}
                            onChange={(e) => setBirthaProximity(e.target.value)}
                            type="range"
                            min="0"
                            max="100"
                            step="20"
                            className="w-2/3 mx-auto appearance-none h-4 rounded-3xl bg-white shadow-md border-2"
                        />
                    <p className="font-bold">100</p>
                    </div>
                    <h4 className="mx-auto text-lg font-bold py-2">Buckles</h4>
                    <div className="flex align-item w-2/3 mx-auto relative">
                        <p className="font-bold">0</p>
                        <input 
                            id="range2"
                            value={buckles}
                            onChange={(e) => setBuckles(e.target.value)}
                            type="range"
                            min="0"
                            max="100"
                            step="20"
                            className="w-2/3 mx-auto appearance-none h-4 rounded-3xl bg-white shadow-md border-2"
                        />
                        <p className="font-bold">100</p>
                    </div>
                    <h4 className="mx-auto text-lg font-bold py-2">Moonshine Abv Level</h4>
                    <div className="flex align-item w-2/3 mx-auto relative">
                        <p className="font-bold">0%</p>
                        <input 
                            id="range2"
                            value={moonshineAbv}
                            onChange={(e) => setMoonshineAbv(e.target.value)}
                            type="range"
                            min="0"
                            max="100"
                            step="20"
                            className="w-2/3 mx-auto appearance-none h-4 rounded-3xl bg-white shadow-md border-2"
                        />
                        <p className="font-bold">100%</p>
                    </div>
                </div>
                <button id="goat" onClick={() => handleGoatClick()} className={`text-4xl w-1/2 h-12 ml-[25%] bg-red-500 rounded-3xl my-3`}><img className="mx-auto w-8 h-8" src="https://cdn-icons-png.flaticon.com/512/1998/1998662.png"/></button>
                <button id="boat" onClick={() => handleBoatClick()} className={`text-4xl w-1/2 h-12 ml-[25%] bg-red-500 rounded-3xl my-3`}><img className="mx-auto w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/853/853507.png"/></button>
                <p className="text-center w-1/2 mx-auto mt-2">
                    Tired of searching?? Check out your <Link className="text-blue-700 hover:underline" to="/likesmatches"> likes and matches</Link> instead! 
                </p>
            </div>
            <div className="w-3/4 ml-auto h-fit relative pt-10">
                <div className="fixed w-3/4 z-20">
                    <div className="bg-white flex flex-row items-center w-3/4 h-14 mx-auto rounded-xl mb-7 shadow-md relative">
                        <h3 className="text-lg ml-2 font-bold w-fit px-2 rounded-md hover:underline">Run for the Hills</h3>
                        <li className="px-2 list-none">
                            <a className="hover:cursor-pointer hover:underline">Blog</a>
                        </li>
                        <li className="px-2 list-none">
                            <a className="hover:cursor-pointer hover:underline">Contact Us</a>
                        </li>
                        <div className="ml-auto flex flex-row items-center">
                            <ul className="list-none p-0 flex flex-row mr-2">
                                <li className="px-2">
                                    <a className="hover:cursor-pointer hover:underline">Matches</a>
                                </li>
                            </ul>
                            <img onClick={() => navigate('/profile')} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="h-10 w-10 mr-4 hover:cursor-pointer"/>
                        </div>
                    </div>
                </div>
                <h1 className="text-center mt-20 text-4xl font-bold text-lime-500">
                    "alphas don't need to be lone wolves, join the pack"
                </h1>
            </div>
            <div id="profile-list" className="w-3/4 flex flex-wrap ml-auto">
                {displayedUsers.map((eachProfile) =>
                        <RenderProfileCard
                            key={uuid()}
                            picture={eachProfile.profile_picture}
                            beard={eachProfile.beard_length}
                            moonshine={eachProfile.moonshine_abv_level}
                            rodeo_buckles={eachProfile.rodeo_buckles}
                            truck_brand={eachProfile.truck_brand}
                            mode_of_tobacco={eachProfile.mode_of_tobacco}
                            pontoon_boat={eachProfile['pontoon_boat?']}
                            security_goat={eachProfile['security_goat?']}
                            thisCardUserData={eachProfile['user']}
                            current_user_id={current_user_id}
                        />
                    )
                }
            </div>
        </div>
    )
}
