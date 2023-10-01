'use client'

import logo from '../../app/images/Instagram.png'
import search from '../../app/images/search.png'
import home from '../../app/images/homeButton.png'
import message from '../../app/images/message.png'
import newphoto from '../../app/images/newphoto.png'
import like from '../../app/images/like.png'
import profilePhoto from '../../app/images/profile_photo.jpeg'
import Link from 'next/link'

import Image from 'next/image'
export default function Header({ onNewPhotoClick }) {
    return(
        <header className="header">
            <div className="container">
                <div className="header-inner"> 
                    <div>
                <Link href="/home">  <Image className='logo' src={logo}/></Link>      
                    </div>

                    <div className='header-search'>
                         <Image src={search}/>
                        <input type='text' placeholder='Search'/>
                    </div>

                    <div className='insta-button'>
                        <a><Image className='item' src={home} alt="logo"/></a>
                        <a><Image className='item' src={message} alt="logo"/></a>
                        <a><Image onClick={onNewPhotoClick} className='item' src={newphoto} alt="logo"/></a>
                        <a><Image className='item' src={like} alt="logo"/></a>
                        <Link href="/profile"> <Image className='item' src={profilePhoto} alt="logo"/></Link> 
                    </div>
                </div>
            </div>
        </header>
    )
}