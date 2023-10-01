import Image from 'next/image'
export default function Post ({item, onClick}) {
    return(<div className="gallery-item" tabindex="0" onClick={() => onClick(item)}>
        

                            <Image className='post-image' src={item.post_image}  width={320} height={320}/>

                            <div className="gallery-item-info">

                            <ul>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                            </ul>

                        </div>
    </div> )
}