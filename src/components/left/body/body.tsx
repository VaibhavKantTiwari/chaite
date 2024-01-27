import { useSelector } from "react-redux"
import { followerSelector } from "../../../redux/reducers/chatReducer"
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import style from "./body.module.css";
import BodyChats from "../../right/body/chatBody";


//left body design
const Body = ()=>{
    const Followers = useSelector(followerSelector);
    const[searchfollower, setsearchfollower] = useState('');
//filtering the followers
    const filteredfollowers = Followers.filter((Name:any)=>Name.name.toLowerCase().includes(searchfollower.toLowerCase()));



    return(
        <div className={style.lowerbody}>
            <div className={style.followers}>
                followers
            </div>
            <div className={style.searchbar}>
                <input className={style.values}
                type="text"
                placeholder="search names..."
                value={searchfollower}
                onChange = {(e) =>setsearchfollower(e.target.value)}
                
                />
            </div>
            <div className={style.users}>
                <ul>
                    {filteredfollowers.map((Name:any, index:any)=>(
                        
                        <li key={index} >
                            {/* using navlivk to navigate the current user */}
                            <NavLink to={`/body/${Name.follower_id}`} className={style.usercomp}  style={({isActive})=>(isActive?{backgroundColor:"skyblue", color:"darkblue"}:undefined)}>
                            <div className={style.imgcontainer}>
                               <img className={style.imgcontn} src={Name.image_url}/>
                            </div>
                            <div className={style.infocontainer}>
                                <div className={style.username}>
                                    {Name.name}
                                </div>
                                <div className={style.lastword}>
                                    {Name.text_part}...
                                </div>
                            </div>
                            
                        </NavLink>  
                        </li>
                        
                        
                    ))}
                </ul>
                <Outlet/>
            </div>
            
        </div>
    )


}
export default Body;
{/* <NavLink to={{pathname:`/body/${Name.follower_id}`}}></NavLink> */}