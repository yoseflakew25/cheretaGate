import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
// import {
//   getDownloadURL,
//   getStorage,
//   ref,
//   uploadBytesResumable,
// } from 'firebase/storage';
import { app } from '../firebase';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import {
  updateStart,
  updateSuccess,
  updateFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signoutSuccess,
} from '../redux/user/userSlice';
// import { useDispatch } from 'react-redux';
// import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import {

  HiArrowSmRight,

} from 'react-icons/hi';




const DashProfile = () => {




  const handleSignout = async () => {
    // try {
    //   const res = await fetch('/api/user/signout', {
    //     method: 'POST',
    //   });
    //   const data = await res.json();
    //   if (!res.ok) {
    //     console.log(data.message);
    //   } else {
    //     dispatch(signoutSuccess());
    //     navigate('/sign-in')
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
    console.log("hello world")
  };
  return (

    <div className="rounded-3xl bg-white w-full lg:px-80 pt-8 pb-16" >
      <h1 className="text-3xl font-semibold text-center my-7 text-primary">Profile</h1>
      <form className="flex flex-col gap-4">

        <input
          type="text"
          placeholder="username"
         
          id="username"
          className="border p-3 rounded-lg"
         
        />
        <input
          type="email"
          placeholder="email"
          id="email"
         
          className="border p-3 rounded-lg"
         
        />
        <input
          type="password"
          placeholder="password"
        
          id="password"
          className="border p-3 rounded-lg"
        />
        <button
         
          className="transition-colors duration-300 bg-primary opacity-75 text-white rounded-lg p-3 uppercase hover:opacity-100 disabled:opacity-80"
        >
         update
        </button>
        <Link
         to='/dashboard'
          className="transition-colors duration-300 border border-primary opacity-75 text-primary rounded-lg p-3 uppercase hover:bg-primary hover:text-white disabled:opacity-80 text-center"
        >
         dashboard
        </Link>
 
      </form>
      <div className="flex justify-between mt-5">
      <button  type='button' onClick={handleSignout} className='text-red-600  hover:text-primary  font-medium  rounded-md flex gap-2'>
             
               Delete Account
             
            </button>
        <button  type='button' onClick={handleSignout} className='text-red-600  hover:text-primary opacity-75 font-medium  rounded-md flex gap-2'>
               <HiArrowSmRight className='w-6 h-6 mr-2'/>
               Sign Out
             
            </button>
      </div>

   
    
    </div>
  

);
}

export default DashProfile



