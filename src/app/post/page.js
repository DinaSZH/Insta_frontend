'use client'
import { useState} from "react"
import React, { useEffect, useRef } from 'react';

import Image from 'next/image'
import ModalPost from "@/components/ModalPost";

export default function Post ({ isModalOpen , close, post }) {
    const [selectedPost, setSelectedPost] = useState(null);

    const [isPostOpen, setIsPostOpen] = useState(false);
    let closePost = (item) => {
        setSelectedPost(item);
        setIsPostOpen(false); 
       };
     
       let openPost = (item) => {
        console.log("OPEN POST")
        setSelectedPost(item);
        setIsPostOpen(true); 
        };

  return(
        <div>
             {isPostOpen && <ModalPost close={closePost} post={selectedPost}/>}
        </div>
 )
}