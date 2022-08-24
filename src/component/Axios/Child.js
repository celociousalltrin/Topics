import React from 'react';
import CustomAPI from "./baseAPI";
import { useState } from 'react';

const Child = ({id,name,username}) => {
    const [update,setUpdate] = useState("")

    const UpdateUser=(()=>{
        const CONT = {
            id:id,
            username:update,
        }
   CustomAPI.put("/user",CONT)
   .then((res)=>console.log(res.data))
   .catch((err)=>console.log(err))
    
    })

    const DeleteUser =(()=>{
    CustomAPI.delete(`/user/${id}`)
    })
  return (
    <div key={id}>
        <h1>{username}</h1>
        <h3>{name}</h3>
        <form>
            <input type="text" placeholder='update username..' 
            onChange={(e)=>setUpdate(e.target.value)}/>
            <button onClick={UpdateUser}>Update</button>
        <button onClick={DeleteUser}>Delete</button>
        </form>
        
    </div>
  )
}

export default Child;