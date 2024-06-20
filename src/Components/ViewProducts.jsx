import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const ViewProducts = () => {
    let [viewproduct,setViewproduct]=useState([])
    useEffect(()=>{
        axios.get('https://664619b951e227f23aadc7d0.mockapi.io/products')
        .then((res)=>{
            setViewproduct(res.data)
        }).catch((error)=>{toast.error(error.message)})
    },[])
    function getImageUrl(name) {
        return new URL(`/src/assets/images/${name}`, import.meta.url).href
     }
  return (
    <div>
        <h1>View Products</h1>
      <div className="table-responsive">
        <table className="table table-primary">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Stock</th>
                </tr>
            </thead>
            <tbody>
            {viewproduct.map((pro,index)=>
                 <tr key={index}>
                 <td>{pro.id}</td>
                 <td>{pro.name}</td>
                 <td>{pro.price}</td>
                 <td><img src={getImageUrl(pro.image)} height="50px" width="50px"/></td>
                 <td>{pro.brand}</td>
                 <td>{pro.countinstock}</td>
             </tr>
                )}
               
            </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default ViewProducts
