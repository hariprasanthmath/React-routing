import React from 'react';
import { Link } from 'react-router-dom';
import "./cardcont.css"
function Prodcard(props) {
    return (
        <div> 
            <div className='cardcont' >
            {props.prod.map((elem,idx)=>{
              return  <div  className='card' key={elem.id}><Link  to={`/products/${elem.id}`}>{elem.title}</Link></div>
            })}
           </div>
            {/* <Button variant="contained">Click</Button> */}
        </div>
    );
}

export default Prodcard;