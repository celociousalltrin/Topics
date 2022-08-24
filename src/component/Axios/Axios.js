import React from 'react';
import CustomAPI from "./baseAPI";
import {useState,useEffect} from "react";
import Child from "./Child";

const Axios = () => {
    const [user,setUser] = useState([])
    const [person,setPerson] = useState("")
    const [profile,setProfile] = useState("")

useEffect(()=>{
   CustomAPI.get("/user")
   .then((res)=>setUser(res.data))
   .catch((err)=>console.log(err))
},[])

const renderIteration =(()=>{
    return user.map((item)=><Child key={item.id} {...item} />)
})

const AddingUser = (()=>{
     const OBJ = {
        id: user[user.length-1].id+1,
        name: person,
        username: profile,
     }
     CustomAPI.post("/user",OBJ)
     .then((res)=>console.log(res.data))
     .catch((err)=>console.log(err))
})

  return (
    <div>
        <form>
            <input name="name" type="text" placeholder='name...' 
            onChange={(e)=>setPerson(e.target.value)}/>
            <input name="username" type="text" placeholder='username...' 
             onChange={(e)=>setProfile(e.target.value)}/>
            <button onClick={AddingUser}>Add user</button>
        </form>
        {renderIteration()}
    </div>
  )
}

export default Axios;