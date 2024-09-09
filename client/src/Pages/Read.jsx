import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Read = () => {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const getData = async () => {
    const response = await fetch('http://localhost:8000/all');
    const result = await response.json();
    console.log(result)
    if (!response.ok) {
      setError(result.error)
    }
    if (response.ok) {
      setData(result)
    }
  }
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8000/${id}`, {
      method: 'DELETE'
    });
    const result = await response.json();
    if (!response.ok) {
      console.log(error)
      setError(result.error)
    }
    if (response.ok) {
      setError("the post is successfully deleted")

      setTimeout(() => {
        setError("")
        getData()
      }, 2000)
    }

  }

  useEffect(() => {
    getData()
  }, [])
  console.log(data)

  return (
    <div className='container'>
      <h1 className='text-center'>All posts</h1>
      <div className="row">
      {error && <div className="alert alert-danger" role="alert">
        {error}
      </div>}
        {data?.map((ele) => (
          <div key={ele._id} className="col-3">
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
                <p className="card-text">Age : {ele.age}</p>
                <a href="#" className="btn btn-primary" onClick={() => handleDelete(ele._id)}>Delete</a>
                <Link to={`/${ele._id}`} className="card-link btn btn-primary mx-2">Edit</Link>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Read
