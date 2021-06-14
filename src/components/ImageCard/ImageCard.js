import React, { useEffect, useState } from 'react';
import ImageCardDetails from '../ImageCardDetails/ImageCardDetails';
import SearchPicture from '../SearchPicture/SearchPicture';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {fasFaFrown  } from '@fortawesome/free-solid-svg-icons';
// import { fasFaFrown } from '@fortawesome/free-regular-svg-icons';




const ImageCard = () => {
    const [images, setImages] = useState([]);
    const [term, setTerms] = useState('');
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data =>{
            setImages(data.hits)
            setLoading(false)
            })
        .catch(err => console.log(err))
    }, [term])
    return (
       <div className="container mx-auto">
           <SearchPicture textSearch = {(text) => setTerms(text)}></SearchPicture>
           {
               !Loading && images.length === 0 && <h2 className="text-center text-green-400 font-bold ms-auto text-6xl mt-32">Not Found Image</h2>
           }
          {Loading ? <h2 className="text-center text-green-400 font-bold ms-auto text-6xl mt-32">wait...</h2> :
           <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
               {
                   images.map(image =><ImageCardDetails key={image.id} image={image}></ImageCardDetails>)
               }
           </div>}
       </div>
    );
};

export default ImageCard;