import axios from 'axios'
import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import NavbarHeader from './NavbarHeader'


const LogIn = () => {
  let [email,setEmail]=useState("")  
  let [password,setPassword]=useState("")  
  let navigate=useNavigate()

  let handleSubmit=(e)=>{
    e.preventDefault()
    axios.get(`https://664619b951e227f23aadc7d0.mockapi.io/users?email=${email}`)
    .then((res)=>{
      /* console.log(res.data[0].password==password) */
      if(res.data[0].password==password){
          if(res.data[0].role=="admin"){
            localStorage.setItem('email',email)
            localStorage.setItem('role','admin')
            toast.success('login successfully')
            navigate('/admindash')  
          }
          else if(res.data[0].role=="user"){
            localStorage.setItem('email',email)
            localStorage.setItem('role','user')
            toast.success('login successfully')
            navigate('/dash')
          }
      }
      else{
        toast.error("invalid credential")
      }
    })
    .catch((error)=>{
      toast.error(error.message)
    })
    
  }
  return (
    <>
    <NavbarHeader/>
    <div className='container mt-4 col-8'>
      <h1>Login </h1>
    <hr/>
    <Form onSubmit={handleSubmit}>
      <FloatingLabel  label="Email address" className="mb-3" >
        <Form.Control type="email" placeholder="name@example.com"  name="email" value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        {/* <span className='text-danger'>{error.mail?error.mail:null}</span> */}
      </FloatingLabel>
      <FloatingLabel label="Password" className="mb-3" >
        <Form.Control type="password" placeholder="Password"  name="password" value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        {/* <span className='text-danger'>{error.pwd?error.pwd:null}</span> */}
      </FloatingLabel>
      <Button variant='danger' type="submit">LogIn</Button>
      </Form>
      </div>
    </>
  )
}

export default LogIn
