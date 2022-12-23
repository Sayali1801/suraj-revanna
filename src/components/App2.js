import "../App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Press from "./Press";
import Gallery from "./Gallery";
import Initiatives from "./Initiatives";
import GetTouch from "./GetTouch";
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
