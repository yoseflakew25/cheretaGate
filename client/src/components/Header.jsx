
import { NavLink, Link,useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
 import { useEffect, useState } from "react";
 import { useSelector, useDispatch } from 'react-redux';
 import { toggleTheme } from '../redux/theme/themeSlice';
 import { signoutSuccess } from '../redux/user/userSlice';





export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const [searchTerm, setSearchTerm] = useState('');

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
  


   useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);



  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
        navigate('/sign-in')
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };


  return (
    <header
      aria-label="Site Header"
      className={`bg-[#FAFCFF] sticky border-b top-0 z-50  ${
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
          <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          placeholder="Search Tenders"  
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="input input-bordered w-full max-w-xs" />
          </form>
    
        </div>

        <nav
          aria-label="Site Nav"
          className="items-center justify-center hidden gap-8 text-md font-medium lg:flex lg:w-0 lg:flex-1"
        >
    
          <NavLink
            to="/search"
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



{currentUser ? (
       
       <div className="dropdown dropdown-end lg:-mr-16">
       <div tabIndex={0} role="button">
        <div className="avatar">
  <div className="w-12 rounded-full">
    <img  alt='user' src={currentUser.profilePicture} />
  </div>
</div>


</div>
       <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <div className="px-4 py-2">
        <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
        </div>
         <li><Link to={'/dashboard?tab=profile'}>
              Profile
            </Link></li>
         <li><button onClick={handleSignout}>Sign out</button></li>
       </ul>
     </div>
        ) : (
          <Link to='/sign-in' className="px-10 py-3 text-sm font-medium rounded-lg text-white bg-primary opacity-75 hover:opacity-100">
          {" "}
          Sign in
        </Link>
        )}


       
      </div>

      <div className="border-t border-gray-100 lg:hidden">
        <nav className="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium gap-8">
         
          <NavLink
            to="/search"
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