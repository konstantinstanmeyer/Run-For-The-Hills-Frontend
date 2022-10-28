import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileForm({ profileID, userID, updateProfile, currentUser }){

    const navigate = useNavigate();
    const [clicked, setClicked] = useState(true)
    
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
            console.log('howdy from an updated profile', formData)
            setHasNotSubmitted(() => false)
            //navigate('/dating')
          } else {
            //Display errors
            res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
        })
        
      }


        return (
          <div className="h-screen w-screen bg-cover bg-bottom fixed bg-[url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1682&q=80')]">
          <div className="bg-[url('https://pngimg.com/uploads/paper_sheet/paper_sheet_PNG7232.png')] bg-no-repeat mt-[2%] bg-center bg-contain h-[90vh] relative">
              <div className="mx-auto pt-[5%] flex flex-col justify-center overflow-y-scroll w-1/3 relative">
                  <h1 className="text-center text-3xl font-bold italic">become an individual</h1>
                  <img onClick={() => setClicked(!clicked)} src="https://cdn-icons-png.flaticon.com/512/1159/1159876.png" className="h-10 w-10 absolute right-5 top-20 hover:cursor-pointer"/>
                  <img className="w-32 mx-auto m-5 h-32 object-cover rounded-full" src={currentUser.profile_picture}/>
                  {!clicked ? <div>   
                                  <p className="ml-[20%] text-lg font-semibold py-[1%]">Beard Length: <span className="text-sm">{currentUser.profile.beard_length == null ? "N/A" : currentUser.profile.beard_length}</span></p>
                                  <p className="ml-[20%] text-lg font-semibold py-[1%]">Moonshine Abv. Level: <span className="text-sm">{currentUser.profile.moonshine_abv_level == null ? "N/A" : currentUser.profile.moonshine_abv_level}</span></p>
                                  <p className="ml-[20%] text-lg font-semibold py-[1%]">Truck Brand <span className="text-sm">{currentUser.profile.truck_brand == null ? "N/A" : currentUser.profile.truck_brand}</span></p>
                                  <p className="ml-[20%] text-lg font-semibold py-[1%]">Mode of Tobacco <span className="text-sm">{currentUser.profile.mode_of_tobacco == null ? "N/A" : currentUser.profile.mode_of_tobacco}</span></p>
                                  <p className="ml-[20%] text-lg font-semibold py-[1%]">Has Pontoon? <span className="text-sm">{currentUser.profile["pontoon_boat?"] == null ? "N/A" : currentUser.profile["pontoon_boat?"] == true ? "yes ma'am!" : "no sir!"}</span></p>
                                  <p className="ml-[20%] text-lg font-semibold py-[1%]">Security goat check! <span className="text-sm">{currentUser.profile["security_goat?"] == null ? "N/A" : currentUser.profile["security_goat?"] == true ? "passed!" : "failed!"}</span></p>
                              </div> : 
                              <div>
                                  <form onSubmit={onSubmit} className="flex flex-col">
                                      <input className="my-2 h-5 text-sm w-1/2 mx-auto indent-1 rounded-md bg-white/40 text-black italic" placeholder="profile picture" type="text" value={formData["profile_picture"]} name='profile_picture' onChange={handleChange}/>
                                      <input className="my-2 h-5 text-sm w-1/2 mx-auto indent-1 rounded-md bg-white/40 text-black italic" placeholder="beard length(in)" type="number" value={formData.beard_length} name='beard_length' onChange={handleChange}/>
                                      <input className="my-2 h-5 text-sm w-1/2 mx-auto indent-1 rounded-md bg-white/40 text-black italic" placeholder="moonshine abv level" type="number" value={formData.moonshine_abv_level} name='moonshine_abv_level' onChange={handleChange}/>
                                      <input className="my-2 h-5 text-sm w-1/2 mx-auto indent-1 rounded-md bg-white/40 text-black italic" placeholder="truck brand" value={formData.truck_brand} type="text" name='truck_brand' onChange={handleChange}/>
                                      <input className="my-2 h-5 text-sm w-1/2 mx-auto indent-1 rounded-md bg-white/40 text-black italic" placeholder="mode of tobacco" value={formData.mode_of_tobacco} type="text" name='mode_of_tobacco' onChange={handleChange}/>
                                      <div className="flex flex-row w-1/3 mx-auto items-center">
                                          <input className="my-2 h-5 text-sm indent-1 rounded-md bg-white/40 text-black italic px-2" type="checkbox" value={formData["pontoon_boat?"]} name='pontoon_boat?' onChange={handleChange}/><span className="px-2">Pontoon Boat??</span>
                                      </div>
                                      <div className="flex flex-row w-1/3 mx-auto items-center">
                                          <input className="my-2 h-5 text-sm indent-1 rounded-md bg-white/40 text-black italic px-2" type="checkbox" value={formData["security_goat?"]} name='security_goat?' onChange={handleChange}/><span className="px-2">Security Goat??</span>
                                      </div>
                                      <button type="submit" className="w-1/4 mx-auto bg-white/40 h-fit mt-2 rounded-md hover:bg-white/80">submit</button>
                                      {/* <button className="w-1/4 mx-auto bg-white/40 h-fit mt-2 rounded-md hover:bg-white/80" onClick={() => navigate('/dating')}>Return to the Haystack</button> */}
                                  </form>
                                  <button className="w-1/4 mx-auto bg-white/40 h-fit mt-2 rounded-md hover:bg-white/80" onClick={() => navigate('/dating')}>Return to the Haystack</button>
                              </div>
                  }
              </div>
          </div>
          {/* <button onClick={() => setClicked(!clicked)}> 
              <p>Edit Your Profile!</p>
          </button> */}
          {/* {clicked ? 
              null 
              : 
              <ProfileForm restTYPE={'PATCH'}/>
          } */}
      </div>
        )
}


