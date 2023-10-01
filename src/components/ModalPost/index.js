'use client'
import { useState} from "react"
import React, { useEffect, useRef } from 'react';

import Image from 'next/image'
import upload from '../../app/images/upload.png'
import x from '../../app/images/x.png'
import profilePhoto from '../../app/images/profile_photo.jpeg'
import like from '../../app/images/like.png'
import comment from '../../app/images/comment.png'
import imoji from '../../app/images/imoji.png'
import AddComment from "../AddComment";

export default function ModalPost ({ isModalOpen , close, post }) {
  const [commentText, setCommentText] = useState(""); // Use a different name for the comment variable
  const [allComments, setAllComments] = useState([]);

  const onChangeComment = (e) => {
    setCommentText(e.target.value); // Update the comment text variable
  }

  const saveComment = () => {
    const newComment = {
      comment: commentText // Create a comment object with the comment text
    };

    // Add the new comment to the list of all comments
    setAllComments([...allComments, newComment]);

    // Clear the comment text input field
    setCommentText("");
  }

  return(
        <div>
             <div className="modal">
        <div className="modal-backdrop" onClick={close}></div>

        <div className='newUpload'>
          <div className='viewPost' >
              <div className='upload-post flex'>

                <div className="image-container">
                  <Image  src={post.post_image}  width={320} height={320}/>
                  </div>
                
                <div className="postDetails"> 
                    <div className="username-header">
                        <div className="username flex flex-ai-c">
                          <Image className="profile-photo-small" src={profilePhoto}/>
                          <h5>Username</h5>
                        </div>

                        <div className="edit">
                          <p>edit</p>
                        </div>
                    </div>

                    <div className="comment-section">
                      {allComments.map(item => (<AddComment addComment={item} />))}
                    </div>

                    <div className="comment-bottom">
                        <div className="post-content">
                          <div className="reaction-wrapper">
                          <Image src={like} className="icon"/>
                          <Image src={comment} className="icon"/>
                          </div>
                              <p className="likes">1,012 likes</p>
            
                              <p className="post-time">2 minutes ago</p>
                        </div>

                        <hr></hr>
                        <div className="comment-wrapper">
                          <Image src={imoji} className="icon" alt=""/>
                          <input type="text" className="comment-box" placeholder="Add a comment" onChange={onChangeComment} value={commentText}/>
                          <button className="comment-btn" onClick={saveComment}>post</button>
                      </div>
                    </div>
                    
                </div>       
              </div>
          </div>

      <div className='x'>
        <Image onClick={close} src={x}/>
      </div>
        </div>
        </div>
        </div>
 )
}