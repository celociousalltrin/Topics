import React, { useState } from 'react';
import { GetData } from '../feature/UserSlice';
import { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import { adduser,updateUSer,deleteUser } from '../feature/UserSlice';

const Test = () => {
    const [name,setName] = useState("")
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [updateUser,setUpdateUser] = useState("")

    const dispatch = useDispatch()

    useEffect(()=>{
  dispatch(GetData())
    },[dispatch])

    const UserList = useSelector((state)=>state.UserInfo.value)

    const AddUser =(()=>{
        const OBJ = {
            id:UserList[UserList.length-1].id+1,
            username:username,
            name:name,
            email:email
        }
      dispatch(adduser(OBJ))
    })

  return (
    <div>
        <input name="username" id="username" type="text" placeholder='username..' 
        onChange={(e)=>setUsername(e.target.value)}/>
        <input name="name" id="name" type="text" placeholder='name...' 
         onChange={(e)=>setName(e.target.value)}/>
        <input name="email" id="email" type="email" placeholder='email...' 
        onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={AddUser}>Add</button>
        
    {UserList.map(({username,name,email,id})=>{
        return(
            <div key={id}>
            <h1>{username}</h1>
            <h2>{name}</h2>
            <h4>{email}</h4>
            <input name="updateUser" id="UpdateUser" type="text" placeholder='update..' 
        onChange={(e)=>setUpdateUser(e.target.value)}/>
        <button onClick={()=>{dispatch(updateUSer({id:id,username:updateUser}))}}>update</button>
        <button onClick={()=>{dispatch(deleteUser({id:id}))}}>Delete</button>
            </div>
        )
    })}
       </div>
  )
}

export default Test;