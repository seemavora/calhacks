import React from 'react';
import styles from '../styles/Home.css';
import {Link} from 'react-router-dom';
import Purpose from "../assets/purpose.png";
import Why from "../assets/bear.gif";

function Home() {
  return (
    <div className='home'>
      <div className='headerContainer'>
          <h1> BearVibeCheck </h1>
            <div class="pos">
              <div class="image1">
                <img src={Purpose}/>
              </div>
              <div class="text">
                <h2 className='intro'>
                 <h3>Professors, Managers, Camp Leaders, Tutors, and More!</h3> 
                  <h4>
                    Staring at a screen of faces all day and never truly know the vibe of the room, and want to improve understanding and engagement? 
                    <p>
                      BearVibeCheck is the place for you!
                    </p>
                  </h4>
                </h2>
              </div>
              </div> 
        <div className='inDepth'>
            
            <div class='position'>
              <div class='image2'>
                <img src= {Why}/>
              </div>
              <div class='longText'>
                <h3 class = 'header'>
                  Why Is This Important?
                  <p class='importance'>
                  Allows meeting hosts be able to gadge audience feedback post-meeting.
                  Gives teachers an understanding on how well their students grasped the material. 
                  </p>
                </h3>
                
              </div>
            </div>
        </div>        
      </div>
    </div>
  )
}

export default Home