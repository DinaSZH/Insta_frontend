import Image from 'next/image'
import Post from './post';

import post from '../../app/images/profile_photo.jpeg'
import post1 from '../../app/images/post1.jpeg'
import post2 from '../../app/images/post2.jpeg'
import upload from '../../app/images/upload.png'
import x from '../../app/images/x.png'


export default function Posts ({posts, onClickPost}) {
    
    const showPosts = posts.map((item, index) => (<Post key={index} item={item} onClick={onClickPost}/>));
    return(<div className='container-post'>
    <div className='container-gallery'>
        <div className='gallery'>
                {showPosts}   
           
        </div>
    </div>

        <div className="loader"></div>
    </div>)
}