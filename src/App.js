import React from "react";
import Navbar from "./components/Navbar";
import {Routes , Route} from 'react-router-dom';
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="overflow-x-hidden" >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
