import React from 'react'
import { Link } from 'react-router-dom'
const Cta = () => {
  return (
   
  <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24 mb-16">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-primary opacity-75 sm:text-5xl"> Grow Your Business With <br/> 
 cheretaGate.</h2>

      <p className="mx-auto mt-4 max-w-sm text-gray-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus
        ea nihil.
      </p>

      <Link to='/search' className="btn btn-primary opacity-75 opacity-75 px-12 text-white mr-4 mt-8">Get Started</Link>
    </div>


  </div>

  )
}

export default Cta