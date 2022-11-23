import React from 'react';
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Prodcard from '../Components/Prodcard';

function Womensc(props) {
    let [prod,setProd] = useState([]);
     let getProduct = ()=>{
        fetch('https://fakestoreapi.com/products/category/women\'s clothing')
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

export default Womensc;