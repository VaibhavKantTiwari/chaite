import { useSelector } from "react-redux"
import { userSelector } from "../../../redux/reducers/chatReducer"
import style from "./head.module.css"
import Body from "../body/body";


const HeadInfo = ()=>{
    const user = useSelector(userSelector);


//designing the upper head of user
    return(
        <>
        <div className={style.leftpart}>
            <div className={style.userInfo}>
                <div className={style.imgcont}>
                    <img className={style.image} src={user.Img_Url} alt="profile"/>
                </div>
                <div className={style.infocont}>
                    NoPro
                    <br/>
                    {user.UserName}
                </div>
            </div>
            <div className={style.dataRendered}>
                <Body/>
            </div>
        </div>
       
        
        </>
    )
}
export default HeadInfo;