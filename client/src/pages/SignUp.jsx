import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import temp from '../assets/sec.png'
import OAuth from '../components/OAuth';


export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };




 const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  
  return (
    <div className="h-screen  mx-auto lg:grid-cols-2 lg:grid" >
   
   <div className="bg-[#664BC7] flex justify-center align-center h-screen p-16">
            <img
              src={temp}
              alt="image"
              loading="lazy"
              width=""
              height=""
             
    
            />
          </div>
          <div className='flex flex-col justify-center align-center h-screen p-32'>
<h1 className="text-4xl text-center font-semibold my-7 text-primary opacity-75">አካውንት ይክፈቱ</h1>
<form onSubmit={handleSubmit} className="flex flex-col gap-4">
  <input
    type="text"
    placeholder="Username"
    className="border p-3 rounded-lg"
    id="username"
    onChange={handleChange}
    />
  <input
    type="email"
    placeholder="Email"
    className="border p-3 rounded-lg"
    id="email"
    onChange={handleChange}
  />
  <input
    type="password"
    placeholder="Password"
    className="border p-3 rounded-lg"
    id="password"
    onChange={handleChange}
  />

  <button
        type='submit'
        disabled={loading}
    className="bg-primary opacity-75 text-white p-3 rounded-lg uppercase hover:opacity-100 disabled:opacity-55"
  >
    {loading ? (
          <>
            <span className='pl-3'>Loading...</span>
          </>
        ) : (
          'Sign Up'
        )}
  </button>
  <OAuth/>
</form>
<div className="flex gap-2 mt-5">
  <p>Have an account?</p>
  <Link to={"/sign-in"}>
    <span className="text-primary">Sign in</span>
  </Link>
</div>
{errorMessage && <p className="text-red-500 mt-5">{errorMessage}</p>}
</div> 




   </div>
  );
}




