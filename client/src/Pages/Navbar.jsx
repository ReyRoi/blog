import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-screen'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Blog</h1>
                    <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/nav/create'}>Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/nav    '}>Posts</Link>
                            </li>
                        </ul>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        
                    </div>
                </div>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default Navbar
