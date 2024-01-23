import React from 'react'
import { Link } from 'react-router-dom'
const UsersList = () => {
  return (
    <div className="rounded-3xl bg-white p-8">

{/* {userListings && userListings.length > 0 && ( */}
  <div className="flex flex-col gap-4">
    <h1 className="text-center mt-4 text-2xl font-semibold">
     Users
    </h1>
    {/* {userListings.map((listing) => ( */}
      <div
        // key={listing._id}
        className="border rounded-lg p-3 flex justify-between items-center gap-4 bg-white hover:bg-gray-100 ease-in-out duration-300"
      >

        <button
          className="text-slate-700 font-semibold  hover:underline truncate ml-4 "
        //   to={`/listing/${listing._id}`}
        >
<p>Yosef lakew</p>        </button>

        <div className="flex flex-row gap-4 item-center px-4">
          <button
            // onClick={() => handleListingDelete(listing._id)}
            className="text-red-700 uppercase"
          >
            Delete
          </button>


<p className='text-primary'>Admin / User</p>
          <input type="checkbox" className="toggle"  />




        </div>
      </div>



    {/* ))} */}
  </div>
{/* )} */}
</div>
  )
}

export default UsersList