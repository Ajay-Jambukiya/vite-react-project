import React, { Component } from 'react'
import { json } from 'react-router-dom'
import { toast } from 'react-toastify'
export const DataContext=React.createContext()

export default class DataProvider extends Component {
    constructor(props) {
      super(props)
      this.state = {
         cart:[],total:0
      }
    }
    addtoCart=(product)=>{
      if(localStorage.getItem('email')==null  && localStorage.getItem('role')==null){
        alert("please login first")
        this.setState({cart:[]})
      }
      else{
          let notexist=this.state.cart.every((item)=>item.id !== product.id)
          if(notexist){
          let count=1
          this.setState({cart:[...this.state.cart,{...product,count:1}]})
          alert("product added to cart")}
        else{
          alert("product already added to cart")
        }
      }
    }
    increase=(id)=>{
      let {cart}=this.state
      cart.forEach((item,index)=>{
        if(item.id==id){
          if(item.countinstock > item.count)
            item.count=parseInt(item.count)+1
          else
            alert(`only ${item.countinstock} available`)
        }
      })
      this.setState({cart:cart})
      this.getTotal()
    }
    decrease=(id)=>{
      let {cart}=this.state
      cart.forEach((item,index)=>{
        if(item.id==id){
          if(item.count>1){
            item.count=parseInt(item.count)-1
          }else{
            item.count=1
          }
        }
      })
      this.setState({cart:cart})
      this.getTotal()
    }
    removeItemCart=(id)=>{
      if(window.confirm('are you sure to remove this item from cart?')){
        let {cart}=this.state
        cart.forEach((item,index)=>{
          if(item.id==id){
            cart.splice(index,1)
          }
        })
        this.setState({cart:cart})
        this.getTotal()
      }
    }
    clearCart=()=>{
      this.setState({cart:[],total:0})
    }
    getTotal=()=>{
      let {cart}=this.state
      const result = cart.reduce((prev,item)=>{
        return prev + (parseInt(item.price) * parseInt(item.count))},0)
      this.setState({total:result})
    }
    componentDidUpdate(){
      localStorage.setItem('dataCart',JSON.stringify(this.state.cart))
      localStorage.setItem('dataTotal',JSON.stringify(this.state.total))
    }

    componentDidMount(){
      const dataCart=JSON.parse(localStorage.getItem('dataCart'))
      if(dataCart != null){
        this.setState({cart:dataCart})
      }
      const dataTotal=JSON.parse(localStorage.getItem('dataTotal'))
      if(dataTotal != null){
        this.setState({total:dataTotal})
      }
    }
    
  render() {
    const {addtoCart,increase,decrease,removeItemCart,clearCart,getTotal}=this;
    let {cart,total}=this.state;
    return (
      <>
        <DataContext.Provider value={{addtoCart,increase,decrease,removeItemCart,clearCart,getTotal,cart,total}}>
            {this.props.children}
        </DataContext.Provider>
      </>
    )
  }
}
