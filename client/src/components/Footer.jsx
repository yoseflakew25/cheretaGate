import React from 'react'
// import footerlogo from '../assets/footerlogo.jpg'
// import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-primary opacity-75">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
        <h2 className="text-3xl font-bold text-white">cheretaGate</h2>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-200">
           Copyright &copy; 2024 , All rights reserved
        </p>

        <ul className="mt-6 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
         
        <li>
            <Link  className="text-gray-200 transition hover:text-gray-400" to="/">
              {" "}
              Home{" "}
            </Link>
          </li>

          <li>
          <Link  className="text-gray-200 transition hover:text-gray-400" to="/search">              {" "}
              Tenders{" "}
            </Link>
          </li>

          <li>
          <Link className="text-gray-200 transition hover:text-gray-400" to="/faq">              {" "}
              Faq{" "}
            </Link>
          </li>

          <li>
          <Link className="text-gray-200 transition hover:text-gray-400" to="/about">              {" "}
              About{" "}
            </Link>
          </li>

          <li>
          <Link className="text-gray-200 transition hover:text-gray-400" to="/profile">              {" "}
              Profile{" "}
            </Link>
          </li>
        </ul>

  
      </div>
    </footer>
  );
}

export default Footer