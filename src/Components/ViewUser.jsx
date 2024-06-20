import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const ViewUsers = () => {
    let [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get('https://664619b951e227f23aadc7d0.mockapi.io/users?role=user')
        .then((res)=>{
            setUsers(res.data)
        }).catch((error)=>{toast.error(error.message)})
    },[])
  return (
    <div>
      <div class="table-responsive">
        <table class="table table-primary">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Role</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>
                 <tr key={index}>
                 <td>{user.id}</td>
                 <td>{user.username}</td>
                 <td>{user.email}</td>
                 <td>{user.password}</td>
                 <td>{user.role}</td>
             </tr>
                )}
               
            </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default ViewUsers
