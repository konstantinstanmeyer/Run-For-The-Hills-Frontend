import React, { useState } from 'react';

// TO DO
// gonna need some on submit thing that changes the form to be closed and then links to see your likes or to see some fish

export default function ProfileForm({ restTYPE, data }){

  let profileID=0

  console.log(data)

  // TO DO
  // the userID is good
  // use session to get profile id from user id??
    
    const [formData, setFormData] = useState({
        beardLength: undefined,
        truckBrand:'',
        prefferedTobacco:'',
        moonShine: undefined,
        securityGoat: undefined,
        pontoonBoat: undefined,
        profilePic: '',
        photoPng: '',
        rodeoBuckles: undefined
      })
      
      const [errors, setErrors] = useState([])
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    
      // TO DO
      // gonna be tricky with create vs edit profile
      // this is for CREATE
      function onSubmit(e){
        e.preventDefault()

       // fetch(`/profiles/${profileID}` 
        fetch('/profiles',{
          method: restTYPE,
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({...formData, ongoing:true})
        })
        .then(res => {
          if(res.ok){
            console.log('hwody')
            //res.json().then(addProfile)
          } else {
            //Display errors
            res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
        })
      }
        return (
          <div>
          {errors?errors.map(e => <div>{e}</div>):null}
          <form onSubmit={onSubmit}>

            <br/><br/>

            <label>beardLength</label>
            <input type='number' name='beardLength' value={formData.beardLength} onChange={handleChange} />
            
            <br/><br/>

            <label> truckBrand</label>
            <textarea type='text' name='truckBrand' value={formData.truckBrand} onChange={handleChange} />
          
            <br/><br/>

            <label>prefferedTobacco</label>
            <textarea type='text' name='prefferedTobacco' value={formData.prefferedTobacco} onChange={handleChange} />
          
            <br/><br/>

            <label>securityGoat </label>
            <input type='checkbox' name='securityGoat' value={formData.securityGoat} onChange={handleChange} />
          
            <br/><br/>

            <label>pontoonBoat </label>
            <input type='checkbox' name='pontoonBoat' value={formData.pontoonBoat} onChange={handleChange} />
          
            <br/><br/>

            <label>profilePic</label>
            <textarea type='text' name='profilePic' value={formData.profilePic} onChange={handleChange} />

            <br/><br/>

            <label>photoPng</label>
            <textarea type='text' name='photoPng' value={formData.photoPng} onChange={handleChange} />

            <br/><br/>

            <label>rodeoBuckles</label>
            <input type='number' name='rodeoBuckles' value={formData.rodeoBuckles} onChange={handleChange} />
          
            <br/><br/>
            <button>
                <input type='submit' value='Update Profile' />
            </button>
          </form>
          {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
          </div>
        )
}