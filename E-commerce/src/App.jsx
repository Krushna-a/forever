import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Collections from './pages/Collections';
import Product from './pages/Product'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword';
import Orders from './pages/Orders'
import PlaceOrders from './pages/PlaceOrders'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import Deliever from './pages/Deliever';
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar></Navbar>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collections />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Orders />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/placeOrder' element={<PlaceOrders />} />
        <Route path='/deliver' element={<Deliever />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App;
