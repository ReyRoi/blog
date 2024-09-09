import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const[email,setEmail] = useState()
  const [password,setPassword] =useState()
  const [error,setError] = useState('')
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data ={email,password}
    const response = await fetch('http://localhost:8000/signup',{
      method : 'POST',
      body: JSON.stringify(data),
      headers : {
        "Content-type" : "application/json"
      }
    });
    const result = await response.json();
    console.log(email,password)
    if (!response.ok) {
      setError(result.error)
    }
    if (response.ok) {
      setError("")
      console.log(result)
    }
  }
  return (
    <div className='flex w-full h-screen items-center justify-center'>
      <form className='px-10 py-10 rounded-3xl border-3 border-slate-900'>
        <h1 className='text-5xl'>Welcome to The Blogs</h1>
        <p className='text-lg text-gray-500 mt-4'>Signup to Enter</p>
        <div className='flex flex-col p-5 w-full'>
            <div className='flex flex-col items-start '>
                <label htmlFor="">Email </label>
                <input type="text" className='py-2 px-2 mt-3 w-full border-1 border-slate-900 rounded' placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className='flex flex-col items-start mt-3'>
                <label htmlFor="">Password  </label>
                <input type="password" className="py-2 px-2 mt-3 w-full border-1 border-slate-900 rounded" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
            <Link to='/login' className='bg-slate-900 p-2 text-white rounded active:scale-[.98] active-duration-75 hover:scale-[1.01] ease-in-out transition-all' type='submit'>Sign up</Link>

            </div>
        </div>
    
      </form>
    </div>
  )
}

export default Signup
