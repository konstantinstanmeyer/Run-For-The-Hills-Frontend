import React, { useState } from 'react';
import RenderProfileCard from "./renderprofilecard";
import {v4 as uuid} from "uuid";
import { Link } from "react-router-dom";

export default function Browsing() {

    const testArray = [1,2,3]

    return (

        <div>
            
            Time to get spicy 🌶️ 🫑 🥵
            
            <div className="profile-browsing">
            
                {testArray.map((eachTest) =>
                        <RenderProfileCard
                            key={uuid()}
                            number={eachTest}
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