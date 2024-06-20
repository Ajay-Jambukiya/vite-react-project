import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const AddProducts = () => {
    let navigate=useNavigate()
    let [addproduct,setAddproduct]=useState({id:"",name:"",price:"",image:"",brand:"",countinstock:"",desc:""})
    let handleImage=(e)=>{
        // console.log(e.target.files[0].name)
        setAddproduct({...addproduct,image:e.target.files[0].name})
    }
    let addprod=(e)=>{
        e.preventDefault();
        // console.log(addproduct)
        axios.post('https://664619b951e227f23aadc7d0.mockapi.io/products',addproduct)
        .then((res)=>{
            toast.success("product added")
            navigate('/admindash/viewproduct')
        })
        .catch((error)=>{
            toast.error(error.massage)
        })
    }
  return (
    <>
      <h1>Add products</h1>
      <form onSubmit={addprod}>
        <div className="row">
            <div className='form-group col-4'>
                <label>Name:</label>
                <input type="text" className='form-control' name="name" value={addproduct.name} onChange={(e)=>setAddproduct({...addproduct,name:e.target.value})}/>
            </div>
            <div className='form-group col-4'>
                <label>Price:</label>
                <input type="text" className='form-control' name="price" value={addproduct.price} onChange={(e)=>setAddproduct({...addproduct,price:e.target.value})}/>
            </div>
            <div className='form-group col-4'>
                <label>Image:</label>
                <input type="file" className='form-control' name="image" onChange={handleImage}/>
            </div>
        </div>
        <div className='form-group'>
            <label>Brand:</label>
            <input type="text" className='form-control' name="brand" value={addproduct.brand} onChange={(e)=>setAddproduct({...addproduct,brand:e.target.value})}/>
        </div>
        <div className='form-group'>
            <label>Count In Stock:</label>
            <input type="number" className='form-control' name="countinstock" value={addproduct.countinstock} onChange={(e)=>setAddproduct({...addproduct,countinstock:e.target.value})}/>
        </div>
        <div className='form-group'>
            <label>Description:</label>
            <textarea className='form-control' name="desc" value={addproduct.desc} onChange={(e)=>setAddproduct({...addproduct,desc:e.target.value})}></textarea>
        </div>
        <div class="d-grid gap-2">
          <button type="submit" name="submit" id="" class="btn btn-primary mt-2">Save Product</button>
        </div>
      </form>
    </>
  )
}

export default AddProducts
