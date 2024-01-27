import { useSelector } from "react-redux";
import { chatSelector, followerSelector } from "../../../redux/reducers/chatReducer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { db } from "../../../firebase/firebaseInit";
import { doc, updateDoc } from "firebase/firestore";
import style from "./body.module.css"
//designing the body where the chats will print
const BodyChats=()=>{
    const[packet, setPacket] = useState({
        text:"",
        msg_id:0,
        sender:"User",
        time_stamp:""
        
    })
    //use selector to render the chats
    const chats = useSelector(chatSelector);
    const followers = useSelector(followerSelector);
    const{id} = useParams();
    let data = chats.find((chat:any)=>chat.follower_id == id);
    let follower = followers.find((chat:any)=>chat.follower_id == id);
    console.log(" is");
    console.log(data);
    const filter = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log("chatload")
        console.log(packet)

        const updateData = async() =>{
            const docRef = doc(db, "Chats", data.id);
            await updateDoc(docRef, {
                "chat_history":[...data.chat_history, packet]
            })
            const dociRef = doc(db, "Followers", follower.id);
            await updateDoc(dociRef, {
                "text_part":packet.text.substring(0, 6)
            })
            

        }
        //make packet again empty after passing data to database
        updateData();  
        setPacket({
            text:"",
            msg_id:0,
            sender:"User",
            time_stamp:""

        })


    }
    const updateanddata = (newValue:string ) =>{
        setPacket((prev)=>({
            ...prev,
            ['text']:newValue,
            msg_id:Number(data.follower_id + data.chat_history.length)+1,
            time_stamp:`${new Date().getHours()}:${new Date().getMinutes()}`
        }))
    }

    return(
        <>
            <div className={style.prapanch}>

                <div className={style.activity}>
                    chating.....
                </div>
                <div className={style.chatbox}>
                    {data && data.chat_history.map((chat:any)=><>
                    <div className={chat.sender=="User"?style.maindabba2:style.maindabba1}>
                        <div className={style.innerbox}>

                            <div className={style.baate}>{chat.text}</div>
                            <div className={style.samay}>~&nbsp;{chat.time_stamp.length>=15?chat.time_stamp.substring(16, 21):chat.time_stamp}</div>

                        </div>

                        

                    </div>
                    </>)}
                </div>
                {/* sending message to follower */}
                {data && <form onSubmit={filter} className={style.fillhere}>
                    <div className={style.fillinp}>
                        <input type="text" required placeholder="type here"  value={packet.text} onChange={(e)=>updateanddata(e.target.value)}/>
                    </div>
                    <div className={style.fillsum}>
                    <button type="submit">submit</button>
                    </div>
                    

                </form>}
                

            </div>
        
        </>
        


    )
}
export default BodyChats;