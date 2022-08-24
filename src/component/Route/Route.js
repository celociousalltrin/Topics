import React from 'react';
import {BrowserRouter,NavLink,Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Setting from './Pages/Setting';
import Login from './Pages/Login';
import Pagenotfound from './Pages/Pagenotfound';
import "./Route.css"


const Navigation = () => {
  return (
    <BrowserRouter>
    <div className='Navigation'>
   <NavLink to="/">Home</NavLink>
   <NavLink to="/Profile">Profile</NavLink>
   <NavLink to="/Setting">Setting</NavLink>
   <NavLink to="/Loggin">Loggin</NavLink>
    </div>

    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/Setting" element={<Setting />}></Route>
        <Route path="/Loggin" element={<Login />}></Route>
        <Route path="/*" element={<Pagenotfound />}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default Navigation;