import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   signInStart,
//   signInSuccess,
//   signInFailure,
// } from '../redux/user/userSlice';
// import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
//   const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
//   const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   dispatch(signInStart());
    //   const res = await fetch('/api/auth/signin', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   const data = await res.json();
    //   console.log(data);
    //   if (data.success === false) {
    //     dispatch(signInFailure(data.message));
    //     return;
    //   }
    //   dispatch(signInSuccess(data));
    //   navigate('/');
    // } catch (error) {
    //   dispatch(signInFailure(error.message));
    // }
    console.log('handle submit')
  };
  return (
    <div className='p-3 py-24 max-w-lg mx-auto'>
      <h1 className=' text-center font-semibold my-7 mb-8'> <span className='text-md'>ሰላም 👋 , Welcome Back!</span> <br/>
<span className='text-4xl font-bold text-primary opacity-75'>Login to CheretaGate</span></h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />

        <button
        //   disabled={loading}
          className='bg-primary opacity-75 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {/* {loading ? 'Loading...' : 'Sign In'} */}
          sign in
        </button>
        {/* <OAuth/> */}
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {/* {error && <p className='text-red-500 mt-5'>{error}</p>} */}
    </div>
  );
}