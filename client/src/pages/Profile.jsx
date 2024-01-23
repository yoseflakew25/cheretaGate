

import { Link } from 'react-router-dom';
export default function Profile() {




  return (

      <div className="rounded-3xl bg-white w-full px-4 lg:w-1/3 lg:mx-auto" >
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
          <span
           
            className="text-red-700 cursor-pointer"
          >
            Delete account
          </span>
          <span  className="text-red-700 cursor-pointer">
            Sign out
          </span>
        </div>

     
      
      </div>
    
  
  );
}