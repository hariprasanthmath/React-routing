import React from 'react';
import "./products.css"
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function Product(props) {
    return (
        <div className='prodcont'>
           <div className='leftsidebar'>
          
           {/* <a href='/contact'>Contact</a> */}
            <Link style={{textDecoration:"none"}} to='electronics'>Electronics</Link>
            <Link style={{textDecoration:"none"}} to='jewelery'>Jewelery</Link>
            <Link style={{textDecoration:"none"}} to='mensc'>Men</Link>
            <Link style={{textDecoration:"none"}} to='womensc'>Women</Link>
           </div>
           <div className='mainside'>
                    <Outlet/>
                    
           </div>
        </div>
    );
}

export default Product;