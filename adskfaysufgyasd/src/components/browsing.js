import React, { useState } from 'react';
import RenderProfileCard from "./renderprofilecard";
import {v4 as uuid} from "uuid";
import { Link } from "react-router-dom";

export default function Browsing({ allProfiles }) {


    return (

        <div>
            
            Time to get spicy 🌶️ 🫑 🥵
            
            <div className="profile-browsing">
            
                {allProfiles.map((eachProfile) =>
                        <RenderProfileCard
                            key={uuid()}
                            picture={eachProfile.profile_picture}
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