import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FaShoppingBag, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import LogIn from './LogIn';
import { DataContext } from './Context';

const Dashboard = () => {
    let [username,setUsername]=useState('')
    const {cart}=useContext(DataContext)
    let navigate=useNavigate()
    let handlelogout=()=>{
        localStorage.clear();
        navigate('/')
    }
    useEffect(()=>{
        let email=localStorage.getItem('email')
        setUsername(email.slice(0,-10))
    })
    return (
    <>
    {localStorage.getItem('role')=='user'
    ?
    <>
      <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
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
                        <NavLink to='/dash' className="active text-light text-decoration-none">Home</NavLink>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                        <NavLink to='/' className="active text-light text-decoration-none">Products</NavLink>
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
                        <a className="nav-link">
                        <a className='nav-link'>
                          <NavLink to='cart' className="active text-light text-decoration-none">Cart <FaShoppingCart size={25}/>
                            <span className="badge rounded-pill text-bg-danger" style={{position:'relative',top:'-10px'}}
                              >{cart.length}</span>
                          </NavLink>
                        </a>
                        </a>
                    </li>
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
        <Outlet/>
    </>
    :
      <LogIn/>
    }
    </>
    );
}

export default Dashboard
