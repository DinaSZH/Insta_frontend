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
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '@/app/store/slices/authSlice'


export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [isFollowersOpen, setIsFollowersOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth)

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

    let closeFollowers = () => {
      setIsFollowersOpen(false); 
     };
   
     let openFollowers = () => {
      setIsFollowersOpen(true); 
     };
   

  const [posts, setPosts] = useState([{
    post_image: post
  },
  {
    post_image: post1
  },
  {
    post_image: post2
  },
  {
    post_image: post1
  },
  {
    post_image: post
  },
  {
    post_image: post
  },
  {
    post_image: post
  },
  ])

  const addNewPost = (selectedPhoto)=> {
    const newPost = {
      post_image: selectedPhoto,
    };

    setPosts((posts) => [...posts, newPost]);
    setIsModalOpen(false)
  }



  return (
    <main>
      <Header onNewPhotoClick={openModal}/>

      <div className='profile'>
      <div className="container">
        <div className='profile-container flex'>
            <div className='profile-photo'>
                <Image src={profilePhoto}/>
            </div>
            <div className='profile-info'>
                <div className='username-info flex flex-jc-sb flex-ai-c'>
                  <h2>Username</h2>
                  <div> <button className='button-dark'>Follow</button></div>
                  
                </div>

                <div className='flex flex-jc-sb'>
                  <a><span>1258 posts</span></a>
                  <a onClick={openFollowers}><span>4M followers</span></a>
                  <a><span>1250 following</span></a>
                </div>

                <div>
                  <p>Bio</p>
                  
                        {isAuth && <Link href="/signup"> <button className="button-dark" onClick={() => dispatch(logOut())}>
                        Logout
                        </button></Link> }
                </div>
            </div>
        </div>

        { isFollowersOpen && <ModalFollowers close={closeFollowers}/>}


      <div className='Posts'>
        <div className='post-buttons'>
            <a>
              <h3>Posts</h3>
            </a>
       </div>
      </div>
          

          <Posts posts={posts} onClickPost ={openPost}/>

          {isPostOpen && <ModalPost close={closePost} post={selectedPost}/>}
        
          { isModalOpen && <ModalUploadPhoto addNewPost={addNewPost} close={closeModal} />}
        </div>
      </div>
    </main>
  )
}
