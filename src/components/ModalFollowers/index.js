'use client'
import { useState} from "react"
import React, { useEffect, useRef } from 'react';

import Image from 'next/image'
import upload from '../../app/images/upload.png'
import x from '../../app/images/x.png'
import profilePhoto from '../../app/images/profile_photo.jpeg'

export default function ModalFollowers ({ isModalOpen , close }) {
  return(
    <div>
            <div className="modal">
        <div className="modal-backdrop" onClick={close}></div>

        <div className='newUpload'>
          <div className='newPost' >
              <div className="titleModal flex flex-jc-sb flex-ai-c">
                <a className="a-blue"></a>
                <h1>Followers</h1>
                <a className="a-blue" onClick={close}>X</a>
              </div>
           <hr></hr>

            <div className='upload-post flex'>

             <div className="followers"> 
                  <div className="username flex flex-ai-c flex-jc-sb">
                        <div className="flex flex-ai-c gap10">
                        <Image className="profile-photo-small" src={profilePhoto}/>
                        <h5>Username</h5>
                        <a className="a-blue" >Follow</a>
                        </div>
                        
                        <button className="button-gray">remove</button>
                  </div>
            </div>
        </div>

      <div className='x'>
        <Image onClick={close} src={x}/>
      </div>
        </div>
        </div>
        </div>
    </div>
 )
}