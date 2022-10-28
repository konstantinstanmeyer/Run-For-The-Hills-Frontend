import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileForm from './profileform';

export default function Profile({currentUser}){
    // const navigate = useNavigate();
    // const [clicked, setClicked] = useState(true)
    // console.log(currentUser);

    // const [formData, setFormData] = useState({
    //     beard_length: undefined,
    //     truck_brand:'',
    //     mode_of_tobacco:'',
    //     moonshine_abv_level: undefined,
    //     "security_goat?": undefined,
    //     "pontoon_boat?": undefined,
    //     profile_picture: '',
    //     photo_png: '',
    //     rodeo_buckles: undefined,
    //     user_id: currentUser.id
    // })

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setFormData({ ...formData, [name]: value })
    // }

    // function onSubmit(e){
    //     e.preventDefault()
    //     fetch(`/profiles/${currentUser.profile.id}`,{
    //       method:'PATCH',
    //       headers: {'Content-Type': 'application/json'},
    //       body:JSON.stringify(formData)
    //     })
    //     .then(res => {
    //       if(res.ok){
    //         console.log(res)
    //         console.log('howdy from an updated profile')
    //         console.log(res.json())
    //         setClicked(!clicked)
    //       } else {
    //         //Display errors
    //         res.json().then(data => console.log(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
    //       }
    //     })
        
    //   }
    //console.log(currentUser.profile)    

    // {"id":4,"profile_picture":"https://media.gettyimages.com/photos/cowgirl-picture-id157185521?s=612x612","photo_png":"nill","beard_length":0,"moonshine_abv_level":17,"rodeo_buckles":83,"truck_brand":"ford","mode_of_tobacco":"all","pontoon_boat?":true,"security_goat?":true,"user_id":4,"user":{"id":4,"email":"d@gmail.com","first_name":"Wendy","last_name":"Baconator"}

    return(
        <ProfileForm 
            profileID={currentUser['profile'].id}
            userID={currentUser.id}
            currentUser={currentUser}
        />
    
    )
}