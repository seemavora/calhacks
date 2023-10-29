import React from 'react'
import styles from '../styles/Home.css'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className='home'>
      <div className='headerContainer'>
          <h1> DETECTING FACIAL EXPRESSION IN CLASSROOMS</h1>
          <div>
            <p className='intro'>
            Who we are: 
            </p>
          </div>
          
          <Link to="/Upload Video">
            <button>Upload Video</button>
          </Link>
          
      </div>
    </div>
  )
}

export default Home