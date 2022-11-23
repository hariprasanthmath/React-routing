// import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./products.css"
function Products(props) {
    let {id} = useParams();
    let [detail,setDetail] = useState({});
    
    let getProduct = ()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>{setDetail(json);console.log(json);})    
    }
    useEffect(()=>{
       getProduct();
    },[])
    return (
       
        
            
              
                Object.keys(detail).length > 0 ? 
                <div className='divcontshow'>
                <div className='leftdiv'>
               <img style={{height:"200px",width:"80%"}} src={detail.image} alt="prodimg"></img>
              </div>
             <div className='rightdiv'>
                <Stack>
                    <h3>{detail.title}</h3>
                    <h3>{"$ "+ detail.price}</h3>
                    <p>{detail.rating.rate + " (" + detail.rating.count+")"}</p>
                    <p>{detail.description}</p>
                    
                </Stack>
             </div> 
             </div>:
             <img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loadinggif"/>
              
      
       
    )
}

export default Products;