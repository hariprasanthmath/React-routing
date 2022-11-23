import React from 'react';
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import "../Components/cardcont.css"
import Prodcard from '../Components/Prodcard';
{/* <Button variant="contained">Click</Button> */}
function Electronics(props) {
    let [prod,setProd] = useState([]);
    let getProduct = ()=>{
       fetch('https://fakestoreapi.com/products/category/electronics')
       .then(res=>res.json())
       .then(json=>{setProd(json);console.log(json);})    
   }
   useEffect(()=>{
      getProduct();    
   },[]);
    return (
        <Prodcard prod={prod}/>
    );
}

export default Electronics;