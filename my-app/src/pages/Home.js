import React from 'react';
import styles from '../styles/Home.css';
import {Link} from 'react-router-dom';
import Purpose from "../assets/purpose.png";
import Why from "../assets/bear.jpeg";

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
                    Staring at too many faces all day and want to know how to improve understanding and engagement? 
                    <p>
                      BearVibeCheck is the place for you
                    </p>
                  </h4>
                </h2>
              </div>
              </div> 
        <div className='inDepth'>
            <h3>
              Why Is This Important?
            </h3>
            <div class='position'>
              <div class='image2'>
                <img src= {Why}/>
              </div>
              <div class='longText'>
                <p>
                  fjdalgjiaogjiaog;j
                </p>
              </div>
            </div>
        </div>        
      </div>
    </div>
  )
}

export default Home