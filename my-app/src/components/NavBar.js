import React, {useState} from 'react'
import Logo from "../assets/zoom.png";
import {Link} from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/NavBar.css";

function NavBar() {
    const [openLinks, setOpenLinks] = useState(false) // false = "close", true="open"
    const toggleNavBar= () => {
        setOpenLinks(!openLinks) //sets it to the opposite of what openLinks is set to 
    }

  return ( //- if statement , :- else statement
    <div className='navbar'>
        <div className="leftSide" id={openLinks ? "open" : "close"}>  
            <img src={Logo}/>
            <div className='hiddenLinks'>
                <Link to="/">About </Link>
                <Link to="/menu">Upload Video </Link>
                <Link to="/about">Explore Insights </Link>
                <Link to="/contact">Contact </Link>
            </div>
        </div>
        <div className="rightSide"> 
            <Link to="/">About </Link>
            <Link to="/menu">Upload Video </Link>
            <Link to="/about">Explore Insights </Link>
            <Link to="/contact">Contact </Link>
            <button onClick={toggleNavBar}>
                <ReorderIcon/>
            </button>
            
        </div>

    </div>
  )
}

export default NavBar