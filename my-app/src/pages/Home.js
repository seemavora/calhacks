import React from 'react'
import styles from '../styles/Home.css'
import { Link } from 'react-router-dom'

function Home() {
  const uploadFile = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:5001/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className='home'>
      <div className='headerContainer'>
        <h1> DETECTING FACIAL EXPRESSION IN CLASSROOMS</h1>
        <div>
          <p className='intro'>
            Who we are:
          </p>
        </div>

        {/* <label htmlFor="fileInput">
          <button>Upload Video</button>
        </label>
        <input type="file" id="fileInput" onChange={uploadFile} style={{ display: 'none' }} /> */}
        <label htmlFor="fileInput">
    Click here to Upload Video
</label>
<input type="file" id="fileInput" onChange={uploadFile} style={{ display: 'none' }} />



      </div>
    </div>
  )
}

export default Home