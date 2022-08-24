import React from 'react';
import axios from "axios";
import {useEffect,useState} from "react";

const Operation = () => {
    const[data,SetData] = useState([])

    useEffect (()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>SetData(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div>
        {data.map(({name,username,id})=>{
            return(
                <div key={id}>
                    <h1>{name}</h1>
                    <h4>{username}</h4>
               </div>
            )
        })}
        <h1>{0}</h1>
    </div>
  )
}

export default Operation