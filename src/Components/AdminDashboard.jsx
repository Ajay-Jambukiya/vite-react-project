import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FaShoppingBag, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import LogIn from './LogIn';

const AdminDashboard = () => {
    let [username,setUsername]=useState('')
    let navigate=useNavigate()
    let handlelogout=()=>{
        localStorage.clear();
        navigate('/')
    }
    useEffect(()=>{
        let email=localStorage.getItem('email')
        setUsername(email.slice(0,-10))
    },[])
    return (
    <>
    {localStorage.getItem('role')=='admin'
    ?
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand">
              <NavLink to='/' className="active text-light text-decoration-none"><FaShoppingBag/> MyShop</NavLink>
              </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link">
                        <NavLink to='/' className="active text-light text-decoration-none">Home</NavLink>
                        </a>
                    </li>                
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <NavLink to='/' className="active text-light text-decoration-none">Products </NavLink>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item">
                                    <Link to='addproduct' className="text-dark text-decoration-none">Add Product</Link>
                                </a>
                            </li>
                            <li><hr className="dropdown-divider"/></li>
                            <li>
                                <a className="dropdown-item">
                                    <Link to='viewproduct' className="text-dark text-decoration-none">View Product</Link>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active">
                        <Link to='users' className="text-light text-decoration-none">Users</Link>
                        </a>
                    </li> 
                </ul>
                <form className="d-flex" role="search">
                    <div className='input-group'>
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-primary" type="submit"><i className='bi bi-search'></i></button>
                    </div>
                </form>
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className='nav-link'>
                            <a className="nav-link">Welcome {username}</a>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                          <button onClick={handlelogout} className="btn text-light text-decoration-none">Log Out</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>

        <div className='container mt-3'>
            <Outlet/>
        </div>
    </>
    :
      <LogIn/>
    }
    </>
    );
}


export default AdminDashboard