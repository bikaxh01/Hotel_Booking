import { validateUser } from "@/Store/Slice/authSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Signout from "./signout";

function Header() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) =>{
    return state.userAuth.isAuthenticated
  } )

  
  useEffect(()=>{
   dispatch(validateUser())
  },[dispatch])

  return (
    <div className=" bg-blue-800 py-3">
      <div className=" container mx-auto flex justify-between">
        <span className=" text-3xl text-white font-bold tracking-tight">
          <Link to="/">Booking.com</Link>
        </span>
        <span className=" flex space-x-2">
          {
            isLoggedIn ? <><Link to='/my-bookings'  className="flex items-center text-white px-3 font-bold hover:bg-blue-600">my-booking</Link>
            <Link to='/my-hotels'  className="flex items-center text-white px-3 font-bold hover:bg-blue-600">my-hotels</Link>
            <Signout/>
            </>: <Link
            to="/signin"
            className=" flex item-center pt-1 text-blue-600 px-3  bg-white font-bold hover:bg-gray-300"
          >
            sign In
          </Link>
          }
         
        </span>
      </div>
    </div>
  );
}

export default Header;
