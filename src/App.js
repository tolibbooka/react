import React,{useContext, useState} from 'react';
import Api from './8-darst/API';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import "./App.css"
import ProductDetiles from "./8-darst/ProductDetil";
import Quit from "./9-darst/Toto"
import Quit2 from './9-darst/Navbar2'
// import Card from './10-darst/card';
// import Card2 from './10-darst/card2'; 
// import ContextPage from './11-darst/ContextPage';
// import ContextPage2 from './11-darst/ContextPage2';
// import { DataContext } from './11-darst/DataContext';
import Darst from './12-darst/input';
import Const from './15-darst/Const';
import CrudBeckend from './17-darst/crut';
import IndexReducer from './20-darst/IndexReducer';
import List from './21-darst/api/List';

const App = () => {
  
  
    const [ul,setUl] = useState(false)
    const miniFun = () =>{
      setUl( !ul ) 
    }
    // const {dark,setDark} = useContext(DataContext);
    // const darkMode = () =>{
    //   setDark(!dark)
    // }
    return(
      <div>
        dkndvnv
        {/* <Router>
        <nav>
          <div className="logo">Logo</div>
          <ul className={ul ? "ul activ " : "ul"}>
          <li> <Link onClick={miniFun} to ="/"></Link></li>
          </ul>
          <div className="minu">
            <button onClick={miniFun} id='menu_btn'>Menu</button>
          </div>
        </nav>
        <Routes>
          <Route path='/'element={<ContextPage/>}/>
          <Route path='/Page2'element={<ContextPage2/>}/>
          {/* <Route path='/product/:id'element={<ProductDetiles/>}/> */}

        {/* </Routes> */}
        {/* // </Router> */} 
        {/* <Darst/> */}
        {/* <CrudBeckend/> */}
        <IndexReducer/>
        <List/>
      </div>
    )
}

export default App;