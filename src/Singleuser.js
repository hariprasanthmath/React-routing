import React from 'react';
import "./Components/singleuser.css"
function Singleuser(props) {
    return (
        <div className='singlecard' style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
            <div>
                <img src={props.picture.large} ></img>
            </div>
            <div style={{textAlign:"left"}}>
                 <p>Name: {props.name.title+" " +props.name.first+" " +props.name.last } </p>
                 <p>Gender: {props.gender}</p>
                 <p>Email: {props.email}</p>
                 <p>Age: {props.dob.age}</p>
                 <p>Phone: {props.phone}</p>
                 <p>Location: {props.location.country + ", "+props.location.state+ ", "+ props.location.city }</p>
            </div>
        </div>
    );
}

export default Singleuser;