import React, { useContext } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, NavLink } from "react-router-dom";

import defaultPic from "../../assets/06154e7085aef2fe630f54ccd135cd12-0f41a55479d95f1254ac87c3ae1c83be16831921002412.png"
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
 const {user, logOut}=useContext(AuthContext)
const handleSignOut=()=>{
  logOut()
  .then((res)=>console.log(res.user))
    .catch((err)=>console.log(err.message))
}

  return (
    <div className="max-w-5xl">
      <div className="flex space-x-8">
        <div className="text-white">
          <img
            className="w-32 filter invert"
            src="https://i.ibb.co/pfZKXvW/logo.png"
            alt="Logo"
          />
        </div>
        <div className="relative">
          <input
            className="w-80 border-2 bg-transparent border-white text-white p-2 rounded-lg placeholder-white"
            type="text"
            placeholder="      Search your Destination"
          />
          <AiOutlineSearch className="-mt-7 ml-2 text-xl text-white" />
        </div>
        <div>
          <ul className="flex text-zinc-100 space-x-3">
            <li>News</li>
            <li>Blog</li>
            <li>Destination</li>
            <li><NavLink to={"/contract"}>Contract</NavLink></li>
            <li>
              <NavLink to={"/login"} className="bg-amber-600 px-2 py-1">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 -mt-8 rounded-full overflow-hidden">
            <img className="w-full h-full" src={defaultPic} alt="" />
          </div>
          <div>  

            {user? <button onClick={handleSignOut} >signOut</button>:<span>
            <Link to={"/login"}>
             login
              
            </Link>
          </span>}
          
        </div>
        
        </div>
      </div>
   
    </div>
  );
};

export default Navbar;
