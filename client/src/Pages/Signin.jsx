import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
 

  return (
    <div className='flex w-full h-screen items-center justify-center'>
      <div className='px-10 py-10 rounded-3xl border-3 border-slate-900'>
        <h1 className='text-5xl'>Welcome to The Blogs</h1>
        <p className='text-lg text-gray-500 mt-4'>Signin to Enter</p>
        <div className='flex flex-col p-5 w-full'>
          <div className='flex flex-col items-start '>
            <label htmlFor=''>Email </label>
            <input type='text' className='py-2 px-2 mt-3 w-full border-1 border-slate-900 rounded' placeholder='Enter your email' />
          </div>
          <div className='flex flex-col items-start mt-3'>
            <label htmlFor=''>Password </label>
            <input type='password' className='py-2 px-2 mt-3 w-full border-1 border-slate-900 rounded' placeholder='Enter your password' />
          </div>
          <div className='flex justify-between mt-3'>
            <div>
              <input type='checkbox' className='mr-1' />
              <label htmlFor='' className='font-medium'>Remember for 30 days</label>
            </div>
            <button className='font-medium '>Forgot password?</button>
          </div>
          <div className='mt-8 flex flex-col gap-y-4'>
            <Link to='/nav' className='bg-slate-900 p-2 text-white rounded active:scale-[.98] active-duration-75 hover:scale-[1.01] ease-in-out transition-all'>Sign in</Link>
            <button className='border-2 py-2 '>Sign in with google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
