import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './Context'
import { NavLink } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { BiBorderAll } from 'react-icons/bi'

const Cart = () => {
    const context=useContext(DataContext)
    useEffect(()=>{
        context.getTotal()
    },[context.total])
  return (
    <div className='container mt-4'>
        <h3>Shopping Cart</h3>
        <hr />
        <div className="table-responsive">
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">Sr No.</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {context.cart.length==0
                        ?
                        <tr><th colSpan={6} className='text-center'>Your cart is empty</th></tr>
                        :
                        <>
                        {context.cart.map((item,index)=>
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <button type='button' onClick={()=>context.decrease(item.id)} style={{borderRadius:'5px', backgroundColor:'#cfe2ff'}}>-</button>
                                <input type="text" className='mx-3' value={item.count} style={{width:'30px'}} readOnly/>
                                <button type='button' onClick={()=>context.increase(item.id)} style={{borderRadius:'5px', backgroundColor:'#cfe2ff'}}>+</button>
                            </td>
                            <td>{item.price * item.count}</td>
                            <td>
                                <button type='button' className='btn btn-danger' onClick={()=>context.removeItemCart(item.id)}>
                                    <i className='bi bi-trash'></i>
                                </button>
                            </td>
                        </tr>
                        )}
                        </>
                    }
                   
                </tbody>
            </table>
        </div>
        <div class="card col-3 offset-9">
            <div class="card-body">
                <h4 class="card-title">Total:
                    <span className='float-end'>${context.total}</span>
                </h4>
                <hr />
                <div class="d-grid gap-2">
                    <button type="button"class="btn btn-warning">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Cart
