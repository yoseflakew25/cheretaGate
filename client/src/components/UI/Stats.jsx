import React from 'react'
import { Link } from 'react-router-dom'
const Stats = () => {
  return (
    <div className="rounded-3xl bg-white p-8 grid grid-cols-5 gap-2">

<div className="card bg-base-100 flex flex-col gap-4 items-center p-4">
<Link to='/profile' className="items-center justify-center w-full py-3 text-sm font-medium rounded-lg text-gray-700  opacity-75 bg-[#efeff8] hover:bg-primary hover:text-white flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

                <p>Back</p> 
               </Link>


               <Link to='/createtender' className="w-full py-3 text-sm font-medium rounded-lg text-white bg-primary opacity-75 hover:opacity-100 text-center">
                
                Create Tender
              </Link>
</div>


<div className="card bg-base-100 border">
  <div className="card-body">
  <h2 className='font-bold text-primary text-4xl'>
    45
  </h2>
    <p>Total Tenders</p>
  </div>
</div>


<div className="card bg-base-100 border">
  <div className="card-body">
  <h2 className='font-bold text-primary text-4xl'>
    45
  </h2>
    <p>Open Tenders</p>
  </div>
</div>

<div className="card bg-base-100 border">
  <div className="card-body">
  <h2 className='font-bold text-primary text-4xl'>
    45
  </h2>
    <p>Admins</p>
  </div>
</div>

<div className="card bg-base-100 border">
  <div className="card-body">
  <h2 className='font-bold text-primary text-4xl'>
    45
  </h2>
    <p>Users</p>
  </div>
</div>


</div>
  )
}

export default Stats