import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Prodcard from '../Components/Prodcard';

function Jewelery(props) {
    let [prod,setProd] = useState([]);
     let getProduct = ()=>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
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

export default Jewelery;