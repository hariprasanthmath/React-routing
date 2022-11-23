import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';
import Navbar from './Router/Navbar';
import Home from "./Router/Home";
import Product from "./Router/Product"
import User from './Router/User';
import Electronics from './Router/Electronics';
import { Route, Routes, Navigate } from 'react-router-dom';
import Jewelery from './Router/Jewelery';
import Mensc from './Router/Mensc';
import Womensc from './Router/Womensc';
import Products from './products';
import { BrowserRouter } from 'react-router-dom';
import Userdetail from './Userdetail';
import myContext from './Context/context';
import Contact from './Router/Contact';
function App() {
  let [user,setUser] = useState();
  return (
    <div className="App">
       <Navbar/>
       
      {/* <BrowserRouter> */}
      <myContext.Provider value={[user,setUser]}>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/product' element={<Product/>}>
         <Route path='' element={<Navigate to="electronics"/>}></Route>
         <Route path="electronics" element={<Electronics/>}></Route>
         <Route path="jewelery" element={<Jewelery/>}></Route>
         <Route path="mensc" element={<Mensc/>}></Route>
         <Route path="womensc" element={<Womensc/>}></Route>
      </Route>
      <Route path='/user' element={<User/>}></Route>
      {/* <Route path='/products:id' element={<Products/>}> </Route> */}
      <Route path="/products">
        <Route path=":id" element={<Products />} />
        <Route path="*" element={<p>404 not found</p>}></Route>
      </Route>
      <Route path="/userdetail" >
         <Route path=":id" element={<Userdetail/>}></Route>
         <Route path="*" element={<p>4044 not found</p>}></Route>
      </Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="*" element={<p>404 not found</p>}></Route>
      </Routes>
      </myContext.Provider>
      {/* </BrowserRouter> */}
      
    </div>
  );
}

export default App;
