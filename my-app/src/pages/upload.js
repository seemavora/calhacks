//import React from 'react'
import React, { Component } from 'react';
import styles from '../styles/Upload.css'
import axios from "axios";
import Insights from './insights';

class upload extends Component {
 
    state = {
 
        // Initially, no file is selected
        selectedFile: null,
        showUserList: false
    };
 
    // On file select (from the pop up)
    onFileChange = event => {
 
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
 
    };
 
    // On file upload (click the upload button)
    onFileUpload = () => {

        this.setState({ showUserList : true });
        // Create an object of formData
        const formData = new FormData();
 
        // Update the formData object
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
 
        // Details of the uploaded file
        console.log(this.state.selectedFile);
 
        // Request made to the backend api
        // Send formData object
        // axios.post("api/uploadfile", formData);
    };
 
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
 
        if (this.state.selectedFile) {
 
            return (
                <div>
                    {/* <h3>File Details:</h3>
                    <p>File Name: {this.state.selectedFile.name}</p>
 
                    <p>File Type: {this.state.selectedFile.type}</p>
 
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p> */}
 
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose a file before Pressing the Upload button!</h4>
                </div>
            );
        }
    };
 
    render() {
 
        return (
            <div>
                <h1>
                    
                </h1>
                <h3>
                    Video Upload!
                </h3>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>
                        Upload!
                    </button>
                </div>
                {this.fileData()}
                {this.state.showUserList ? <Insights/> : null}
            </div>
        );
    }
}
 

export default upload;


