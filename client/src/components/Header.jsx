
import { NavLink, useNavigate } from "react-router-dom";

 import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Header() {


   const [isScrolled, setIsScrolled] = useState(false);
   const handleScroll = () => {
     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     setIsScrolled(scrollTop > 0);
   };

   useEffect(() => {
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);
  
  return (
    <header
      aria-label="Site Header"
      className={`bg-[#FAFCFF] sticky top-0 z-50  ${
        isScrolled
          ? "bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-sm"
          : ""
      }`}
    >
      <div className="flex items-center justify-between h-20 max-w-screen-xl mx-16">
        <div className="flex items-center gap-8">
          <NavLink to="/">
           <h2 className="text-3xl font-bold text-primary opacity-75">cheretaGate</h2>
          </NavLink>
          <input type="text" placeholder="Search Tenders" className="input input-bordered w-full max-w-xs" />
    
        </div>

        <nav
          aria-label="Site Nav"
          className="items-center justify-center hidden gap-8 text-md font-medium lg:flex lg:w-0 lg:flex-1"
        >
    
          <NavLink
            to="/tenders"
            className="text-gray-800 hover:text-primary opacity-75"
            activeClassName="text-primary opacity-75"
          >
            Tenders
          </NavLink>
          <NavLink
            to="/faq"
            className="text-gray-800 hover:text-primary opacity-75"
            activeClassName="text-primary opacity-75"
          >
            Faq
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-800 hover:text-primary opacity-75"
            activeClassName="text-primary opacity-75"
          >
            About
          </NavLink>
        </nav>

        <div className="items-center hidden gap-4 lg:flex">
          
              <Link to='/sign-in' className="px-10 py-3 text-sm font-medium rounded-lg text-white bg-primary opacity-75 hover:opacity-100">
                {" "}
                Sign in
              </Link>
              <Link to='/profile' className="px-10 py-3 text-sm font-medium rounded-lg text-white bg-primary opacity-75 hover:opacity-100">
                {" "}
                profile
              </Link>
           
        </div>
      </div>

      <div className="border-t border-gray-100 lg:hidden">
        <nav className="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium gap-8">
         
          <NavLink
            to="/tenders"
            className="text-gray-800 hover:text-primary opacity-75"
            activeClassName="text-primary opacity-75"
          >
            Tenders
          </NavLink>
          <NavLink
            to="/faq"
            className="text-gray-800 hover:text-primary opacity-75"
            activeClassName="text-primary opacity-75"
          >
            Faq
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-800 hover:text-primary opacity-75"
            activeClassName="text-primary opacity-75"
          >
            About
          </NavLink>
          <Link to='/sign-in' className="px-10 py-3 text-sm font-medium rounded-lg text-white bg-primary opacity-75 hover:opacity-100">
                {" "}
                Sign in
              </Link>
        </nav>
      </div>
    </header>
  );
}