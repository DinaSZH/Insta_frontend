'use client'
import { useState} from "react"

import Header from '../../components/header'
import profilePhoto from '../../app/images/profile_photo.jpeg'
import Image from 'next/image'
import Posts from '@/components/posts'
import ModalUploadPhoto from "@/components/ModalUploadPhoto"
import post from '../../app/images/profile_photo.jpeg'
import post1 from '../../app/images/post1.jpeg'
import post2 from '../../app/images/post2.jpeg'
import ModalPost from "@/components/ModalPost"
import ModalFollowers from "@/components/ModalFollowers"
import Post from "../post/page"

//Доработать home page
export default function Home() {
 
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [isFollowersOpen, setIsFollowersOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  let closeModal = () => {
   setIsModalOpen(false); // Close the modal by setting isModalOpen to false
  };

  let openModal = () => {
    setIsModalOpen(true); // Close the modal by setting isModalOpen to false
   };

   let closePost = (item) => {
    setSelectedPost(item);
    setIsPostOpen(false); 
   };
 
   let openPost = (item) => {
    console.log("OPEN POST")
    setSelectedPost(item);
    setIsPostOpen(true); 
    };

  return (
    <main>
      <Header onNewPhotoClick={openModal}/>

          <div className="home-container container">
            <div className="home flex" >
                    <div class="left-col">
                        <button class="btn-scroll" id="btn-scroll-left" onclick="scrollHorizontally(-1)"><i class="fas fa-chevron-left"></i></button>
                            <button class="btn-scroll2" id="btn-scroll-right" onclick="scrollHorizontally(1)"><i class="fas fa-chevron-right"></i></button>
                        <div class="status-wrapper">
                            

                            <div class="status-card">
                                <div class="profile-pic"><Image src={post} alt="logo"/> </div>
                                <p class="username">user_name_1</p>
                            </div>

                            <div class="status-card">
                                <div class="profile-pic"><Image src={post} alt="logo"/></div>
                                <p class="username">user_name_1</p>
                            </div>
            
                            <div class="status-card">
                                <div class="profile-pic"> <Image src={post} alt="logo"/></div>
                                <p class="username">user_name_1</p>
                            </div>
            
                            <div class="status-card">
                                <div class="profile-pic"> <Image src={post} alt="logo"/></div>
                                <p class="username">user_name_1</p>
                            </div>
            
                            <div class="status-card">
                                <div class="profile-pic"><Image src={post} alt="logo"/></div>
                                <p class="username">user_name_1</p>
                            </div>
            
                            <div class="status-card">
                                <div class="profile-pic"><Image src={post} alt="logo"/></div>
                                <p class="username">user_name_1</p>
                            </div>
            
                            <div class="status-card">
                                <div class="profile-pic"><Image src={post} alt="logo"/></div>
                                <p class="username">user_name_1</p>
                            </div>
                            <div class="status-card">
                                <div class="profile-pic"><Image src={post} alt="logo"/></div>
                                <p class="username">user_name_1</p>
                            </div> 

                        
                        </div>

                        <div class="post">
                            <div class="info">
                                <div class="user">
                                    <div class="profile-pic"><Image src={post} alt="logo"/></div>
                                    <p class="username">modern_web_channel</p>
                                </div>
                                
                            </div>
                            <Image src={post} alt="logo"/>
                            <div class="post-content">
                            
                                <p class="likes">1,012 likes</p>
                                <p class="description"><span>username</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima inventore adipisci optio saepe architecto sed illum veritatis atque repudiandae, placeat eos dignissimos explicabo pariatur consequatur, sit reiciendis expedita est. Distinctio!
                                </p>
                                <p class="post-time">2 minutes ago</p>
                            </div>
                            <div class="comment-wrapper">
                                <input type="text" class="comment-box" placeholder="Add a comment"/>
                                <button class="comment-btn">post</button>
                            </div>
                        </div>

                    </div>

                    <div class="right-col">
                        <div class="profile-card">
                            <div class="profile-pic">
                            <Image src={post} alt="logo"/>
                            </div>
                            <div>
                                <p class="username" onclick="openProfile()">Saginbayeva Dina</p>
                                <p class="sub-text">IT2-2004</p>
                            </div>
                            <button class="action-btn">switch</button>
                        </div>
                        <p class="suggestion-text">Suggestions for you</p>
                        <div class="profile-card">
                            <div class="profile-pic">
                            <Image src={post} alt="logo"/>
                            </div>
                            <div>
                                <p class="username">IT2-2004</p>
                                <p class="sub-text">followed by user</p>
                            </div>
                            <button class="action-btn">follow</button>
                        </div>

                        <div class="profile-card">
                            <div class="profile-pic">
                            <Image src={post} alt="logo"/>
                            </div>
                            <div>
                                <p class="username">IT2-2004</p>
                                <p class="sub-text">followed by user</p>
                            </div>
                            <button class="action-btn">follow</button>
                        </div>

                        <div class="profile-card">
                            <div class="profile-pic">
                            <Image src={post} alt="logo"/>
                            </div>
                            <div>
                                <p class="username">IT2-2004</p>
                                <p class="sub-text">followed by user</p>
                            </div>
                            <button class="action-btn">follow</button>
                        </div>

                        <div class="profile-card">
                            <div class="profile-pic">
                            <Image src={post} alt="logo"/>
                            </div>
                            <div>
                                <p class="username">IT2-2004</p>
                                <p class="sub-text">followed by user</p>
                            </div>
                            <button class="action-btn">follow</button>
                        </div>

                        <div class="profile-card">
                            <div class="profile-pic">
                            <Image src={post} alt="logo"/>
                            </div>
                            <div>
                                <p class="username">IT2-2004</p>
                                <p class="sub-text">followed by user</p>
                            </div>
                            <button class="action-btn">follow</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="suggestions"></div>
    </main>
  )
}