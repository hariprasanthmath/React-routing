import React from 'react';
import "../home.css"
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Product from './Product'; 
{/* <Button variant="contained">Click</Button> */}
function Home(props) {
    return (
        <div>
            {/* <p>This is home page</p> */}
            <div className='gradienthome'>
            
          <Link to="/product" element={<Product/>} style={{textDecoration: "none"}}>
              <Button variant="contained">Start</Button>
          </Link>  
               {/* <h1>Home page</h1> */}
            </div>
        </div>
    );
}

export default Home;