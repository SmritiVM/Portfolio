import {React} from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {HashRouter, Routes, Route, Navigate} from "react-router-dom";

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Project from './components/Project/Project.js';


import computer from './assets/Computer.png';

import './App.css';
function App() {
  return (
    <div style={{backgroundImage: `url(${computer})`, backroundRepeat: "no-repeat", 
    backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "0px -400px"}}>
      <HashRouter>
        <div class>
          <Navbar/>
          <Routes>
            <Route path = "/" element = {<Home/>}></Route>
            <Route path = "/about" element = {<About/>}></Route>
            <Route path = "/projects" element = {<Project/>}></Route>
            <Route path = "*" element = {<Navigate to = "/"/>}></Route>
          </Routes>
          <Footer/>
        </div>
      </HashRouter>
      
    </div>
  );
}

export default App;
