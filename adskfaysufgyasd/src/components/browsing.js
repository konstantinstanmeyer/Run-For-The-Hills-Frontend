import React, { useState } from 'react';
import RenderProfileCard from "./renderprofilecard";
import {v4 as uuid} from "uuid";
import { Link } from "react-router-dom";


export default function Browsing({ allProfiles, current_user_id }) {


    console.log(allProfiles)

    return (
        <div className="">
            <img className="w-screen h-screen object-cover fixed -z-10" src="https://images.unsplash.com/photo-1440428099904-c6d459a7e7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>     
            <div id="browsing-sidebar" className="fixed left-0 w-1/4 bg-white/70 backdrop-blur-sm h-full">
            <p>
                Tired of searching?? Check out your <Link to="/likesmatches"> likes and matches</Link> instead! 
            </p>
            <p>
                Time to get spicy 🌶️ 🫑 🥵
            </p>
            </div>
            <div id="profile-list" className="w-3/4 flex flex-wrap ml-auto">
                {allProfiles.map((eachProfile) =>
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
        // let fakeProfiles =  [
    //     {
    //         id: 2,
    //         name: "David Blahblahblah",
    //         profile_picture: 'https://sexyscience1.files.wordpress.com/2013/11/worst-online-dating-profile-photo-8.jpg',
    //         photo_png: 'nill',
    //         beard_length: 0,
    //         moonshine_abv_level: 21.3,
    //         rodeo_buckles: 0,
    //         truck_brand: 'chevy',
    //         mode_of_tobacco: 'chew',
    //         "pontoon_boat?": false,
    //         "security_goat?": false,
    //     },
    //     {
    //         id: 4,
    //         name: "really long name things",
    //         profile_picture: 'https://sexyscience1.files.wordpress.com/2013/11/worst-online-dating-profile-photo-8.jpg',
    //         photo_png: 'nill',
    //         beard_length: 0,
    //         moonshine_abv_level: 21.3,
    //         rodeo_buckles: 0,
    //         truck_brand: 'chevy',
    //         mode_of_tobacco: 'chew',
    //         "pontoon_boat?": false,
    //         "security_goat?": false,
    //     },
    //     {
    //         id: 3,
    //         name: "really long name things",
    //         profile_picture: 'https://sexyscience1.files.wordpress.com/2013/11/worst-online-dating-profile-photo-8.jpg',
    //         photo_png: 'nill',
    //         beard_length: 0,
    //         moonshine_abv_level: 21.3,
    //         rodeo_buckles: 0,
    //         truck_brand: 'chevy',
    //         mode_of_tobacco: 'chew',
    //         "pontoon_boat?": false,
    //         "security_goat?": false,
    //     },
    //     {
    //         id: 1,
    //         name: "really long name things",
    //         profile_picture: 'https://sexyscience1.files.wordpress.com/2013/11/worst-online-dating-profile-photo-8.jpg',
    //         photo_png: 'nill',
    //         beard_length: 0,
    //         moonshine_abv_level: 21.3,
    //         rodeo_buckles: 0,
    //         truck_brand: 'chevy',
    //         mode_of_tobacco: 'chew',
    //         "pontoon_boat?": false,
    //         "security_goat?": false,
    //     },
    //     {
    //         id: 7,
    //         name: "really long name things",
    //         profile_picture: 'https://sexyscience1.files.wordpress.com/2013/11/worst-online-dating-profile-photo-8.jpg',
    //         photo_png: 'nill',
    //         beard_length: 0,
    //         moonshine_abv_level: 21.3,
    //         rodeo_buckles: 0,
    //         truck_brand: 'chevy',
    //         mode_of_tobacco: 'chew',
    //         "pontoon_boat?": false,
    //         "security_goat?": false,
    //     },
    //     {
    //         id: 5,
    //         name: "really long name things",
    //         profile_picture: 'https://sexyscience1.files.wordpress.com/2013/11/worst-online-dating-profile-photo-8.jpg',
    //         photo_png: 'nill',
    //         beard_length: 0,
    //         moonshine_abv_level: 21.3,
    //         rodeo_buckles: 0,
    //         truck_brand: 'chevy',
    //         mode_of_tobacco: 'chew',
    //         "pontoon_boat?": false,
    //         "security_goat?": false,
    //     }
    // ]