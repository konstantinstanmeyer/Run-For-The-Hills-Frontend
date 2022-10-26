import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileForm({ profileID, userID, updateProfile }){

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        beard_length: undefined,
        truck_brand:'',
        mode_of_tobacco:'',
        moonshine_abv_level: undefined,
        "security_goat?": undefined,
        "pontoon_boat?": undefined,
        profile_picture: '',
        photo_png: '',
        rodeo_buckles: undefined,
        user_id: userID
    })
      
      const [errors, setErrors] = useState([])
      const [hasNotSubmitted, setHasNotSubmitted] = useState(true)

      useEffect(() => {
        fetch(`/profiles/${profileID}`)
        .then(res => res.json())
        .then(setFormData)
      },[])
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
  
      
      function onSubmit(e){
        e.preventDefault()
        fetch(`/profiles/${profileID}`,{
          method:'PATCH',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(formData)
        })
        .then(res => {
          if(res.ok){
            res.json().then(updateProfile)
            console.log('howdy from an updated profile')
            setHasNotSubmitted(() => false)
          } else {
            //Display errors
            res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
        })
        
      }


        return (
          <div>
            {hasNotSubmitted ?
              <div>
                <p>Edit Your Profile!</p>
                <br/><br/>
              {errors?errors.map(e => <div>{e}</div>):null}
              <form onSubmit={onSubmit}>

                <br/><br/>

                <label>beardLength</label>
                <input type='number' name='beard_length' value={formData.beard_length} onChange={handleChange} />
                
                <br/><br/>

                <label> truckBrand</label>
                <textarea type='text' name='truck_brand' value={formData.truck_brand} onChange={handleChange} />
              
                <br/><br/>

                <label>prefferedTobacco</label>
                <textarea type='text' name='mode_of_tobacco' value={formData.mode_of_tobacco} onChange={handleChange} />
              
                <br/><br/>

                <label>securityGoat </label>
                <input type='checkbox' name='security_goat?' value={formData['security_goat?']} onChange={handleChange} />
              
                <br/><br/>

                <label>pontoonBoat </label>
                <input type='checkbox' name='pontoon_boat?' value={formData['pontoon_boat?']} onChange={handleChange} />
              
                <br/><br/>

                <label>profilePic</label>
                <textarea type='text' name='profile_picture' value={formData.profile_picture} onChange={handleChange} />

                <br/><br/>

                <label>photoPng</label>
                <textarea type='text' name='photo_png' value={formData.photo_png} onChange={handleChange} />

                <br/><br/>

                <label>rodeoBuckles</label>
                <input type='number' name='rodeo_buckles' value={formData.rodeo_buckles} onChange={handleChange} />
              
                <br/><br/>

                <label>moonshine</label>
                <input type='number' name='moonshine_abv_level' value={formData.moonshine_abv_level} onChange={handleChange} />
                
                <br/><br/>

                
                <button>
                    <input type='submit' value='Update Profile' />
                
                </button>
              </form>
              {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
              </div>
              :
              <div>
                <br/><br/>
                <button onClick={() => navigate("/dating")}>
                    Search the Haystack!
                </button>
                <br/><br/>
                <button onClick={() => navigate("/likesmatches")}>
                    Check out your catches!
                </button>
                <br/><br/>
                <button onClick={() => navigate("/profile")}>
                    Return to Your Profile
                </button>
      
              </div>
            }
          </div>
        )
}


