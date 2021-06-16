import React from 'react';

const ImageCardDetails = (props) => {
    const {webformatURL, user, views, likes, comments, downloads} = props.image;
    const tagsSplit = props.image.tags.split(',')
    return (
        <>
        <div className="max-w-sm rounded overflow-hidden shadow-xl">
            <img src={webformatURL} alt="" className="md:w-full object-cover object-center" />
            <div className="px-6 py-4">
                <div className="text-green-400 text-xl font-bold capitalize mb-2">
                    photo By {user}
                </div>
                <ul>
                    <li><strong>Views:</strong>&nbsp;
                     {views}
                    </li>  
                </ul>
                <ul>
                    <li><strong>Likes:</strong>&nbsp;
                    {likes}
                    </li>
                </ul>
                <ul>
                    <li><strong>Comments:</strong>&nbsp;
                    {comments}
                    </li>
                </ul>
                <ul>
                    <li><strong>Downloads:</strong>&nbsp;
                    {downloads}
                    </li> 
                </ul>
            </div>
             <div className="px-6 py-4">
                {
                    tagsSplit.map(tag =>(
                        <span key={props.image.id} className="inline-block bg-green-200 rounded-full px-3 py-1 m-2 text-black text-sm font-semibold mr-2">
                            #{tag}
                        </span>
                    ))
                }
             </div>
         </div> 
     </>
    );
};

export default ImageCardDetails;