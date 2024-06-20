import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'
import NavbarHeader from "./Components/NavbarHeader"
import Home from "./Components/Home"
import SignUp from "./Components/SignUp"
import Pagenofound from "./Components/Pagenofound"
import LogIn from "./Components/LogIn"
import AdminDashboard from "./Components/AdminDashboard"
import Dashboard from "./Components/Dashboard"
import ViewUser from "./Components/ViewUser"
import AddProducts from "./Components/AddProducts"
import ViewProducts from "./Components/ViewProducts"
import DataProvider from "./Components/Context"
import ProductCard from "./Components/ProductCard"
import Cart from "./Components/Cart"

function App() {

  return (
   <>
    <ToastContainer autoClose={1000}/>
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/admindash" element={<AdminDashboard/>}>
          <Route path="users" element={<ViewUser/>}/>
          <Route path="addproduct" element={<AddProducts/>}/>
          <Route path="viewproduct" element={<ViewProducts/>}/>
        </Route>
        <Route path="/dash" element={<Dashboard/>}>
          <Route path="" element={<ProductCard/>}/>
          <Route path="cart" element={<Cart/>}/>
        </Route>

        <Route path="*" element={<Pagenofound/>}/>
      </Routes>
    </DataProvider>
    
   </>
  )
}

export default App
