import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';

// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor = "lavender";
      document.body.style.color = "black";
      // showAlert("Dark Mode is enabled!","success");
      setAlert("Dark Mode is enabled!");
      document.title = "SKT App";
      setTimeout(()=>{
        document.title = "Text Utilites"
      },2000)
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = "#0E2954";
      document.body.style.color = "white";
      // showAlert("Light Mode is enabled!","success");
      setAlert("Light Mode is enabled!");
      document.title = "SKT App";
      setTimeout(()=>{
        document.title = "Text Utilites"
      },2000)
    }
  }

  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
        setAlert({
        msg : message,
        type : type
      });
      setTimeout(()=>{setAlert(null)},2000);
  }
  



  return (
    <>
      <BrowserRouter>
      
          <Routes>
              <Route path="/" element={<Navbar title={"TextUtils"}about={"About"}home={"Home"} mode={mode} toggleMode={toggleMode}/>}>

                  <Route path="/textform" element={<TextForm mode={mode}/>}/>

                  <Route path="/alert" element={<Alert mode={mode}/>}/>
                    
                  <Route path="/about" element={<About mode={mode}/>}/>  
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
