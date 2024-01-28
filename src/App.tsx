import { Provider } from 'react-redux';
import style from "./app.module.css"
import { store } from './redux/store/store';
import DataFetching from './dataFetching/dataFetching';
import HeadInfo from './components/left/head/head';
import BodyChats from './components/right/body/chatBody';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpperDesign from './components/upperdesign/upperDesign';
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
                <Route path="/*" element={<><HeadInfo/><BodyChats/></>}/>
              </Routes>
            </Router>
        
        </div>
        
      </Provider>
    </div>
    
    </>
  )
}

export default App
