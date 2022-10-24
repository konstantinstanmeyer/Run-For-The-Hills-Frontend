import React, { useState } from 'react';
import RenderProfileCard from "./renderprofilecard";
import {v4 as uuid} from "uuid";

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
            
        </div>

    )
    
}