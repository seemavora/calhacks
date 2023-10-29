import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
//Router: tell React that we want to have some routes in our application; it will wrapped around 
//all the different routes 
//Switch allows us to tell the routes that we only want to go through one route at a time 

function App() {

  // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
      name: [],
      age: 0,
      date: "",
      programming: "",
      usersList: []
  });

  // Using useEffect for single rendering
  useEffect(() => {
      // Using fetch to fetch the api from 
      // flask server it will be redirected to proxy
      fetch("/data").then((res) =>
          res.json().then((data) => {
              // Setting a data from api
              setdata({
                  name: data.result,
                  usersList: data.users
              });
          })
      );
  }, []);

  const NamesList = () => (
    <div className = "tableStyle" style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.usersList.map((item) => (
          <div>
            {item}
            <br />
            <div>____________</div>
            <br />

            </div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.name.map((item) => (
          <div>
          {item}
          <br />
          <div>____________</div>
          <br />
          </div>
        ))}
      </div>
    </div>
    // <div>
    //   <ul>{data.usersList.map(curUser => <li key={curUser}> {curUser} </li>)}</ul>
    //   <ul>{data.name.map(curname => <li key={curname}> {curname} </li>)}</ul>
    // </div>
  );

  return (
    <div className="App">
      <Router>     
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Router>

      <header className="App-header">
                <h1>React and flask</h1>
                {/* Calling a data from setdata for showing */}
                {/* <p>{data.usersList}</p> */}
                <NamesList />
 
            </header>
    </div>
  );
}

export default App;
