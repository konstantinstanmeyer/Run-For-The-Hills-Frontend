import React, { useState } from 'react';
import RenderProfileCard from "./renderprofilecard";
import {v4 as uuid} from "uuid";
import { Link } from "react-router-dom";

export default function Browsing({ allProfiles }) {

    console.log(allProfiles)


    return (

        <div>
            
            Time to get spicy 🌶️ 🫑 🥵

            <br/><br/>
            
            <div className="profile-browsing">
            
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
                            thisuser={eachProfile.user}
                        />
                    )
                }
            
            </div>

            <br/><br/>

            <p>
                Tired of searching?? Check out your <Link to="/likesmatches"> likes and matches</Link> instead! 
            </p>
            
        </div>

    )
    
}