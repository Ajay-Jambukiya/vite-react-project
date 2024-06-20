import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { DataContext } from './Context'

const ProductCard = () => {
    let [product,setProducts]=useState([])
    const context=useContext(DataContext)
    useEffect(()=>{
        axios.get('https://664619b951e227f23aadc7d0.mockapi.io/products')
        .then((res)=>{
            setProducts(res.data)
        }).catch((error)=>toast.error(error.message))
    },[])
    function getImgUrl(name) {
        return new URL(`/src/assets/images/${name}`, import.meta.url).href
     }
  return (
    <>
        <div className='row m-2'>
            {
                product.map((pro,index)=>
                    <div className="card col-2 m-3" key={index}>
                        <img className="card-img-top" src={getImgUrl(pro.image)} alt={pro.name} height='150px'/>
                        <div className="card-body">
                            <h4 className="card-title">{pro.name}</h4>
                            <p className="card-text">{pro.brand}</p>
                            <p className="card-text">${pro.price}</p>
                            <p className="card-text">{pro.desc}</p>
                            <button type="button" class="btn btn-warning" onClick={()=>{context.addtoCart(pro)}}>Add To Cart</button>
                            
                        </div>
                    </div>
                )
            }
        </div>
        
    </>
  )
}

export default ProductCard
