import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LikesMatches(){

    const navigate = useNavigate();

    return (
        <div>
            <br/><br/>
            <div>
                ooohhhh someone likes you....
            </div>
            <br/><br/>
            <button onClick={() => navigate("/profile")}>
                    Return to Your Profile
            </button>
            <br/><br/>
            <button onClick={() => navigate("/dating")}>
                    Search the Haystack!
            </button>
        </div>
    )
}