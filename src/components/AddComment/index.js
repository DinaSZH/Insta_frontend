import Image from 'next/image'
import { useState } from "react"

import profilePhoto from '../../app/images/profile_photo.jpeg'
import like from '../../app/images/like.png'
export default function AddComment({addComment}) {
    return(
        <div className="comment-item flex flex-jc-sb">
            <div className="username flex flex-ai-c">
                <Image className="profile-photo-small" src={profilePhoto}/>
                <h5>Username</h5>
                <p>{addComment.comment}</p>
            </div>
            <div className="post-icons coment-like">
                        <Image src={like}/>
            </div>
        </div>
    )
}