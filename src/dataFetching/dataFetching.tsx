// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { collection, onSnapshot } from 'firebase/firestore';
// import {
//   fetchChatStart,
//   fetchChatSuccess,
//   fetchChatFailure,
// } from '../redux/reducers/chatReducer';
// import {db }from '../firebase/firebaseInit';

// const DataFetching = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchData = () => {
//       dispatch(fetchChatStart());

//       try {
//         // Subscribe to real-time updates for the "User" collection
//         const userUnsubscribe = onSnapshot(collection(db, 'User'), (snapshot) => {
//           const userData = snapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data(),
//           }));
//           dispatch(fetchChatSuccess({ key: 'user', data: userData }));
//         });

//         // Subscribe to real-time updates for the "Follower" collection
//         const followerUnsubscribe = onSnapshot(collection(db, 'Follower'), (snapshot) => {
//           const followerData = snapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data(),
//           }));
//           dispatch(fetchChatSuccess({ key: 'follower', data: followerData }));
//         });

//         // Subscribe to real-time updates for the "Chats" collection
//         const chatsUnsubscribe = onSnapshot(collection(db, 'Chats'), (snapshot) => {
//           const chatsData = snapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data(),
//           }));
//           dispatch(fetchChatSuccess({ key: 'chats', data: chatsData }));
//         });


//       } catch (error:any) {
//         console.error('Error fetching data from database', error);
//         dispatch(fetchChatFailure(error.message));
//       }
//     };

//     fetchData();
//   }, [dispatch]);

//   return null;
// };

// export default DataFetching;
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { collection, onSnapshot } from 'firebase/firestore';
import {
  fetchChatStart,
  fetchChatSuccess,
  fetchChatFailure,
} from '../redux/reducers/chatReducer';
import {db }from '../firebase/firebaseInit';

const DataFetching = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchChatStart());

      try {
        // Subscribe to real-time updates for the "User" collection
        const userUnsubscribe = onSnapshot(collection(db, 'User'), (snapshot) => {
          const userData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          dispatch(fetchChatSuccess({ key: 'user', data: userData[0] }));
        });

        // Subscribe to real-time updates for the "Follower" collection
        const followerUnsubscribe = onSnapshot(collection(db, 'Followers'), (snapshot) => {
          const followerData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          dispatch(fetchChatSuccess({ key: 'follower', data: followerData }));
        });

        // Subscribe to real-time updates for the "Chats" collection
        const chatsUnsubscribe = onSnapshot(collection(db, 'Chats'), (snapshot) => {
          const chatsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          dispatch(fetchChatSuccess({ key: 'chats', data: chatsData }));
        });

        // Return a cleanup function to unsubscribe when the component unmounts
        return () => {
          userUnsubscribe();
          followerUnsubscribe();
          chatsUnsubscribe();
        };
      } catch (error:any) {
        console.error('Error fetching data from database', error);
        dispatch(fetchChatFailure(error.message));
      }
    };

    fetchData();
  }, []);

  return null;
};

export default DataFetching;


