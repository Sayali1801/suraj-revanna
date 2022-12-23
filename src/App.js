import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Press from "./components/Press";
import Gallery from "./components/Gallery";
import Initiatives from "./components/Initiatives";
import GetTouch from "./components/GetTouch";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [appLanguage,setAppLanguage]=useState("english");

  const changeLanguage=(lang)=>{
    setAppLanguage(lang);
    console.log("clickappjs")
    console.log("----"+appLanguage)
  }

  return (
    <>
      <BrowserRouter>
        <div className="App">
        {console.log("app js****")}
          <Header  langfunc={changeLanguage} webLang={appLanguage}/>
          <Routes>
            <Route path="/" exact element={<Home webLang={appLanguage} />} />
            <Route path="/About" exact element={<About />} />
            <Route path="/Press" exact element={<Press />} />
            <Route path="/Gallery" exact element={<Gallery />} />
            <Route path="/Initiatives" exact element={<Initiatives />} />
            <Route path="/Touch" exact element={<GetTouch />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
