import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
const Create = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState(0)
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email, age }
    const response = await fetch('http://localhost:8000/create', {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const result = await response.json()
    if (!response.ok) {
      console.log(result.error)
      setError(result.error)
    }
    if (response.ok) {
      console.log(result)
      setError("")
      setAge("")
      setEmail("")
      setName("")
      navigate('/all')

    }
  }
  return (
    <div className='container ml-0'>
      <h2 className='text-center'>Create a post here</h2>
      {error && <div className="alert alert-danger" role="alert">
        Something went wrong!
      </div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />

        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Create
