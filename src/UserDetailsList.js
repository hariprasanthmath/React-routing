import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./filteruserdetail.css"
import myContext from './Context/context';
import { useNavigate } from 'react-router-dom';
import "./Components/tabledecorate.css"
function UserDetailsList(props) {
    let [data,setData] = useState();
    let [filter,setFilter] = useState();
    let [user,setUser] = useContext(myContext);
    const [seed,setSeed] = useState();
    const navigate = useNavigate();
    const getData =async ()=>{
        console.log("called");
        let resp = await fetch("https://randomuser.me/api/?results=5&gender="+filter);
        let json = await resp.json();
        console.log(json);
        setSeed(json.info.seed);
        setData(json.results);
    }
    useEffect(()=>{
        getData();
    },[])
    useEffect(()=>{
        getData();
        console.log(filter);
    },[filter])
    return (
        <div className='filterdiv'>
            <div >
            <form onChange={(event)=>{setFilter(event.target.value)}} style={{display:"flex",flexDirection:"row",margin:"40px"}}>
            <input type="radio" id="all" name="filter" value="" style={{marginLeft:"40px"}}/>
            <label htmlFor="all">All</label><br/>
            <input type="radio" id="male" name="filter" value="male" style={{marginLeft:"40px"}}/>
            <label htmlFor="male">Male</label><br/>
            <input type="radio" id="female" name="filter" value="female" style={{marginLeft:"40px"}}/>
            <label htmlFor="female">Female</label>
            </form>
            </div>
            <table className='userslist' style={{width:"100%"}}>
                <thead style={{backgroundColor:"black",color:"white"}}>
                    <tr>
                    <td>
                        Image
                    </td>
                    <td>
                        Name
                    </td>
                    <td>
                        Email
                    </td>
                    <td>
                        Gender
                    </td>
                    <td>
                        details
                    </td>
                    </tr>
                </thead>
                <tbody>
                     {
                        data?.map((elem,idx)=>{
                           return  (
                            <tr key={idx}>
                           <td>
                               <img src={elem.picture.medium} alt="userpic"></img>

                           </td>
                           <td>
                               {elem.name.title+" "+elem.name.first + " "+elem.name.last }

                           </td>
                           <td>
                               {elem.email}
                           </td>
                           <td>
                               {elem.gender}
                           </td>
                           <td>
                             {/* <button onClick={()=>{setUser(elem);navigate("/userdetail")}}>detail</button> */}
                             <Link style={{textDecoration:"none",color:"green"}} to={`/userdetail/${seed}${idx}`}>Details</Link>
                           </td>
                       </tr>
                           )
                        })
                     }
                </tbody>
            </table>
        </div>
    );
}

export default UserDetailsList;