
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface chathistory{
  text:string, 
  sender:string,
  msg_id:Number,
  time_stamp:any
}
interface chats{
  id:string,
  follower_id:string,
  chat_history:chathistory[]
}
interface ChatState {
  user: string[];
  follower: string[];
  chats: chats[];
  loading: boolean;
  error: string | null;
}

const initialState: ChatState = {
  user: [],
  follower: [],
  chats: [],
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    // starts before we fetch data
    fetchChatStart: (state) => {
      state.loading = true;
    },
    // after success of fetching data
    fetchChatSuccess: (
      state,
      action: PayloadAction<{ key: 'user' | 'follower' | 'chats'; data: any }>
    ) => {
      state.loading = false;
      state.error = null;
      state[action.payload.key] = action.payload.data;
      console.log(state[action.payload.key])
    },
    //incase if it is failed
    fetchChatFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    add:(state, action)=>{
        state.chats.push(action.payload)
    },
    delete:(state, action) => {
        state.chats.splice(action.payload, 1)

    },
    addfollower:(state, action)=>{
        state.follower = action.payload;
    },
    deletefollower:(state, action) => {
        state.follower.splice(action.payload, 1)

    },
                
  },
});
//export chat reducer to store
export const chatReducer = chatSlice.reducer;
export const { fetchChatStart, fetchChatSuccess, fetchChatFailure, add, delete:deteteChat, addfollower, deletefollower} = chatSlice.actions;
export const chatSelector = (state:{chatReducer:{chats:any}})=>state.chatReducer.chats;
export const followerSelector = (state:{chatReducer:{follower:any}})=>state.chatReducer.follower;
export const userSelector = (state:{chatReducer:{user:any}})=>state.chatReducer.user;
