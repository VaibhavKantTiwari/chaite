// import { addDoc, collection } from "firebase/firestore";
// import { db } from "./firebase/firebaseInit";


// export default  function TestComp(){


//     async function handleSubmit() {
//         try{
//             const docRef = await addDoc(collection(db, "Chats"), {
//                 follower_id:"1010",
//                 chat_history:[
//                     {
//                         msg_id:"10101",
//                         time_stamp: new Date().toString(),
//                         sender:"follower",
//                         text:"hlo"

//                     }
                    
//                 ]        
//             });
//             console.log("added docs", docRef)

//         }
//         catch(error){
//             console.log("the error is"+ error)
//         }

        
        
//     }


//     return <button onClick={handleSubmit}>addUser</button>
// }
// import { useSelector } from "react-redux"
// import { chatSelector, followerSelector, userSelector } from "../../../redux/reducers/chatReducer"


// const Body = () =>{
//         const chats = useSelector(chatSelector);
//         const user = useSelector(userSelector);
//         const follower = useSelector(followerSelector);
//         // console.log(user)
//         // console.log(chats)
//         // console.log(follower)

//         return(
//             <>
//             <h1>{user.UserName}</h1>
//             <img src={user.Img_Url}/>
//             {chats.map((chat:any)=><h1>{chat.follower_id}</h1>)}
//             {follower.map((follow:any)=><img src={follow.image_url}/>)}

//             </>
//         )

// }
// export default Body;