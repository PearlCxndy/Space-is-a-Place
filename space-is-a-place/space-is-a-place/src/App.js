
import { AnimatePresence} from "framer-motion";
// import "./App.css"
import {Routes,Route,useLocation} from "react-router-dom";
import Paint from "./components/Forcanvas"

import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Canvas from "./components/Canvas"




const App = () => {
  const location = useLocation();

  return (
    <>
    <NavBar />
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      <Route index element={<Home />} />
      <Route path ="/canvas" element={<Canvas />}/>
      <Route path ="/Bg" element={<Paint />}/>
    </Routes>
    </AnimatePresence>
    </>
  );
};

export default App;