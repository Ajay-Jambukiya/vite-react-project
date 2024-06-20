import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import NavbarHeader from './NavbarHeader';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


let initialState={id:'',username:'',email:'',password:'',confirmpassword:'',role:'user'}

const SignUp = () => {
  let [user,setUser]=useState({...initialState})
  let [error,setError]=useState({})
  let navigate=useNavigate()

  let handleSubmit=(e)=>{
    e.preventDefault()
    if(!/^[a-z]+[0-9]+\@[a-z]+\.[a-z].{2,3}$/.test(user.email)){
      setError({mail:'follow the pattern'})
    }
    else{
      
    if(user.password!=user.confirmpassword || user.confirmpassword==""){
      setError({cpwd:"password not match"})
    }
    else{
      setError({})
      // alert(JSON.stringify(user))
      axios.post('https://664619b951e227f23aadc7d0.mockapi.io/users',user)
      .then((res)=>{
        toast.success("Register Successfully")
        navigate('/login')
      })
      .catch((error)=>{
        toast.error(error.massage)
      })
    }}
  }
  
  return (
    <>
    <NavbarHeader/>
    <div className='container mt-4 col-8'>
      <h1>Register </h1>
    <hr/>
    <Form onSubmit={handleSubmit}>
    <FloatingLabel  label="Username" className="mb-3" >
        <Form.Control type="text" placeholder="enter name" name="username" value={user.username}
        onChange={(e)=>setUser({...user,username:e.target.value})}/>
        <span className='text-danger'>{error.uname?error.uname:null}</span>
      </FloatingLabel>
       <FloatingLabel  label="Email address" className="mb-3" >
        <Form.Control type="email" placeholder="name@example.com"  name="email" value={user.email}
        onChange={(e)=>setUser({...user,email:e.target.value})}/>
        <span className='text-danger'>{error.mail?error.mail:null}</span>
      </FloatingLabel>
      <FloatingLabel label="Password" className="mb-3" >
        <Form.Control type="password" placeholder="Password"  name="password" value={user.password}
        onChange={(e)=>setUser({...user,password:e.target.value})}/>
        <span className='text-danger'>{error.pwd?error.pwd:null}</span>
      </FloatingLabel>
      <FloatingLabel label="Confirm Password" className="mb-3" >
        <Form.Control type="password" placeholder="confirm Password"  name="confirmpassword" value={user.confirmpassword}
        onChange={(e)=>setUser({...user,confirmpassword:e.target.value})}/>
        <span className='text-danger'>{error.cpwd?error.cpwd:null}</span>
      </FloatingLabel>
      <Button variant='danger' type="submit">SignUp</Button>
      </Form>
      </div>


    </>
  )
}

export default SignUp
