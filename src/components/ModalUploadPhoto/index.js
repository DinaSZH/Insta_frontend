'use client'
import { useState} from "react"
import React, { useEffect, useRef } from 'react';

import Image from 'next/image'
import upload from '../../app/images/upload.png'
import x from '../../app/images/x.png'
import profilePhoto from '../../app/images/profile_photo.jpeg'

export default function ModalUploadPhoto ({ isModalOpen , close, addNewPost }) {
  const fileInputRef = useRef(null);
  const [selectedFilePhoto, setSelectedFilePhoto] = useState(null);
  const [step, setStep] = useState(1)

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        setSelectedFilePhoto(event.target.result);
        // Set step to 2 after image is uploaded
        setStep(2);
      };
  
      reader.readAsDataURL(file);
    }
  };
  

  const handleBackButtonClick = () => {
    // Clear the selected photo and go back to step 1
    setSelectedFilePhoto(null);
    setStep(1);
  };

  return(
    <div>
        {step === 1 && <div className="modal">
        <div className="modal-backdrop" onClick={close}></div>

        <div className='newUpload'>
          <div className='newPost' >
              <div>
                <h1>Create new post</h1>
              </div>
           <hr></hr>

            <div className='upload'>
              <div className="image-container">
                {selectedFilePhoto && (
                  <Image src={selectedFilePhoto} alt="Selected File" className="uploaded-image" width={320} height={320}/>
                )}
              </div>

                <Image className='uploadImg' src={upload} alt="Upload Icon" />
                <h1>Drag photos and videos here</h1>

                <button className="button-dark" onClick={handleButtonClick}>
                  Select from computer
                </button>

                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  accept="image/jpeg, image/png, image/gif"
                  onChange={handleFileUpload}
                />
            </div>
        </div>

      <div className='x'>
        <Image onClick={close} src={x}/>
      </div>
        </div>
        </div>}

        {step === 2 && <div className="modal">
        <div className="modal-backdrop" onClick={close}></div>

        <div className='newUpload'>
          <div className='newPost' >
              <div className="titleModal flex flex-jc-sb flex-ai-c">
                <a className="a-blue" onClick={handleBackButtonClick}>Back</a>
                <h1>Edit</h1>
                <a className="a-blue" onClick={()=>setStep(3)}>Next</a>
              </div>
           <hr></hr>

            <div className='upload'>
               <div className="image-container">
                {selectedFilePhoto && (
                  <Image src={selectedFilePhoto} alt="Selected File" className="uploaded-image" width={320} height={320}/>
                )}
                </div>

                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
            </div>
        </div>

      <div className='x'>
        <Image onClick={close} src={x}/>
      </div>
        </div>
        </div>}

        {step === 3 && <div className="modal">
        <div className="modal-backdrop" onClick={close}></div>

        <div className='newUpload'>
          <div className='newPost' >
              <div className="titleModal flex flex-jc-sb flex-ai-c">
                <a className="a-blue" onClick={()=>setStep(2)}>Back</a>
                <h1>Edit</h1>
                <a className="a-blue" onClick={() => addNewPost(selectedFilePhoto)}>Share</a>
              </div>
           <hr></hr>

            <div className='upload-post flex'>

            <div className="image-container">
                {selectedFilePhoto && (
                  <Image src={selectedFilePhoto} alt="Selected File" className="uploaded-image imageModal" width={320} height={320}/>
                )}
                </div>
              
              <div> 
                  <div className="username flex flex-ai-c">
                  <Image className="profile-photo-small" src={profilePhoto}/>
                  <h5>Username</h5>
                  </div>
                  <div className="description-post">
                    <textarea placeholder="Write a caption..."></textarea>  
                  </div>
              </div>       
            </div>
        </div>

      <div className='x'>
        <Image onClick={close} src={x}/>
      </div>
        </div>
        </div>}
 </div>
 )
}