import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import myContext from './Context/context';
import { useContext } from 'react';
import Singleuser from './Singleuser';
function Userdetail(props) {
//    let [user,setUser] = useContext(myContext);
    let id = useParams();
    let [user,setUser] = useState({}); 
    let ref = useRef();
   const getData =async ()=>{
    let seed = "";
    for(let i=0;i<id.id.length-1;i++){
        seed = seed + id.id.charAt(i);
    }
    console.log(seed);
    ref.current = id.id.charAt(id.id.length-1);
    console.log(ref.current);
     let rspn = await fetch("https://randomuser.me/api/?seed="+seed);
     let json = await rspn.json();
     console.log(json);
     let myUser = json.results[0];
     console.log(myUser);
     setUser(myUser);
   }
//    console.log(id);
   useEffect(()=>{
       getData();
   },[])
    return (
        <div>
            <h2 style={{margin:"20px"}}>User Details</h2>
            {/* <p>{id}</p> */}
            {
                Object.keys(user).length > 0 ? <Singleuser {...user}/>:<p>Loading</p>
            }
        </div>
    );
}

export default Userdetail;