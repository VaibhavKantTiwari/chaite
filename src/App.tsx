import { Provider } from 'react-redux';
import style from "./app.module.css"
import { store } from './redux/store/store';
import DataFetching from './dataFetching/dataFetching';
import HeadInfo from './components/left/head/head';
import BodyChats from './components/right/body/chatBody';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpperDesign from './components/upperdesign/upperDesign';
// import BodyChats1 from './components/right/tail/bodychat1';
// import BodyChats2 from './components/right/tail/bodychat2';
// import BodyChats3 from './components/right/tail/bodychat3';
// import BodyChats4 from './components/right/tail/bodychat4';
// import BodyChats5 from './components/right/tail/bodychat5';
// import BodyChats6 from './components/right/tail/bodychat6';
// import BodyChats7 from './components/right/tail/bodychat7';
// import BodyChats8 from './components/right/tail/bodychat8';
// import BodyChats9 from './components/right/tail/bodychat9';
// import BodyChats10 from './components/right/tail/bodychat10';
function App() {

  return (
    <>
    <div className={style.mainbox}>
      <Provider store={store}>
        <div className={style.upper}>
          <UpperDesign/>
        </div>
        <DataFetching/>
        <div className={style.setup}>
            <Router> 
              <Routes>
                <Route path="/" element={<><HeadInfo/><BodyChats/></>}/>
                <Route path="body/:id" element={<><HeadInfo/><BodyChats/></>}/>
                <Route path="body/*" element={<><HeadInfo/><BodyChats/></>}/>

                {/* <Route path="body/1001" element={<><HeadInfo/><BodyChats/></>}/>
                <Route path="body/1002" element={<><HeadInfo/><BodyChats/></>}/>
                <Route path="body/1003" element={<><HeadInfo/><BodyChats/></>}/>
                <Route path="body/1004" element={<><HeadInfo/><BodyChats/></>}/>
                <Route path="body/1005" element={<><HeadInfo/><BodyChats/></>}/>
                <Route path="body/1006" element={<><HeadInfo/><BodyChats/></>}/>
                <Route path="body/1007" element={<><HeadInfo/><BodyChats/></>}/>
                <Route path="body/1008" element={<><HeadInfo/><BodyChats/></>}/>
                <Route path="body/1009" element={<><HeadInfo/><BodyChats/></>}/>
                <Route path="body/1010" element={<><HeadInfo/><BodyChats/></>}/> */}
              </Routes>
            </Router>
        
        </div>
        
      </Provider>
    </div>
    
    </>
  )
}

export default App
