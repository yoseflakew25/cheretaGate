import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import temp from '../assets/sec.png'
import OAuth from '../components/OAuth';


export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
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
      <h1 className=' text-center font-semibold my-7 mb-8'> <span className='text-md'>ሰላም 👋 , Welcome Back!</span> <br/>
<span className='text-4xl font-bold text-primary opacity-75'>Login to CheretaGate</span></h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='Email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='********'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />

<Link to="/" className='font-bold text-primary opacity-75'>Forgot Password ?</Link>
        <button
        disabled={loading}
          className='bg-primary opacity-75 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
            {loading ? (
                <>
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign In'
              )}
        </button>
       <OAuth />
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {errorMessage && (
      
<div role="alert" className="alert alert-error mt-8">
<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
<span> {errorMessage}</span>
</div>
          )}
    </div>




   </div>
  );
}