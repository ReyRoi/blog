import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'

const Edit = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState(0)
  const [error, setError] = useState("")
  const {id} = useParams();
  const navigate = useNavigate()
  const getSingleUser =async()=>{
    const response = await fetch(`http://localhost:8000/${id}`);
    const result = await response.json();
    if (!response.ok) {
      setError(result.error)
    }
    if (response.ok) {
      setError("")
      setName(result.name)
      setEmail(result.email)
      setAge(result.age)

    }
  }
  const handleEdit = async (e)=>{
    e.preventDefault();
    const data= {name,email,age}
    const response = await fetch(`http://localhost:8000/${id}`,{
      method : 'PATCH',
      body: JSON.stringify(data),
      headers:{
        "Content-Type" :"application/json"
      }
    });
    const result = await response.json();
    if (!response.ok) {
      setError(result.error)
    }
    if(response.ok){
      setError("")
      navigate('/all')
    }
  }
  useEffect(() => {
    getSingleUser()
  }, [])
  
  return (
    <div className='container my-2'>
      <h1 className='text-center' >Edit the data</h1>
      {error && <div className="alert alert-danger" role="alert">
        Something went wrong!
      </div>}
      <form onSubmit={handleEdit}>
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

export default Edit
