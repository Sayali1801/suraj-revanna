import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Press from "./components/Press";
import Gallery from "./components/Gallery";
import Initiatives from "./components/Initiatives";
import GetTouch from "./components/GetTouch";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
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
