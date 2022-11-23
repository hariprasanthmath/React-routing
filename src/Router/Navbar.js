import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
function Navbar(props) {
    return (
        <div className='contnav'>
            <div className='nav'>
               <Link to="/">Home </Link>
               <Link to="/product">Product</Link>
               <Link to="/user">User</Link>
               <Link to="/contact">Contact</Link>
               {/* <a href='/'>Home</a>
               <a href='/product'>Products</a>
               <a href='/user'>User</a>
               <a href='/contact'>Contact</a> */}
            </div>
        </div>
    );
}

export default Navbar;