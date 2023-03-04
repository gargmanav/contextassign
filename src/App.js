import './App.css';
import React,{createContext} from 'react';

import { useState  } from 'react';
import Home from './Component/Home';
import AboutUs from './Component/AboutUs';
import Services from './Component/Services';
import Header from './Component/Header';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

export const Himanshu = createContext();
function App() {

  const [Showcolor,setcolor] = useState({backgroundColor:"white",color:"black"})
  return (
    <div>
      <div >
      <Himanshu.Provider value={{sendcolor:Showcolor,setbg:setcolor}}>
      <Router>
      <Header sendcolor ={Showcolor} setbg={setcolor}/>
      <Routes>
        <Route exact path='/Home' element={<Home />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/Services' element={<Services />}></Route>
        <Route path='*' element={"404"}></Route>
      </Routes>
      </Router>
      </Himanshu.Provider>
      </div>
    </div>
  );
}

export default App;