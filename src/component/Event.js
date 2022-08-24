import React from 'react';
import { useState,useEffect } from 'react';

const Event = () => {
  const[count,setCount] = useState(0)
  const[time,setTime] = useState(5)
  
  useEffect(()=>{
    console.log("It is invoke for every render")
  })

  useEffect(()=>{
  console.log("It is invoke for initial render")
  },[])

  useEffect(()=>{
   console.log("It is invoked for variable changing render")
  },[time])
  return (
    <div>
      <h1>{count}</h1>
  <button onClick={()=>setCount(count + 1)}>+</button>
  <h1>{time}</h1>
  <button onClick={()=>setTime(time*5)}>*</button>
    </div>
  )
}

export default Event