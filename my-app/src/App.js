import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import UploadFile from './pages/upload';
import Contact from './pages/contact';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
//Router: tell React that we want to have some routes in our application; it will wrapped around 
//all the different routes 
//Switch allows us to tell the routes that we only want to go through one route at a time 

function App() {
  return (
    <div className="App">
      <Router>     
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/upload&explore" element={<UploadFile/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
