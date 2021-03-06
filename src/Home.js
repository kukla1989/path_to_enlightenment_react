import React from 'react';
import './App.css';
import Gallery from 'react-grid-gallery';
import thumbnail1 from './img/thumbnail/1.jpg'
import fullImage from './img/full/1.jpg'


function Home(){    
      const IMAGES =
[{
        src: fullImage,
        thumbnail: thumbnail1,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "лепка це круто"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
}]

	return(
		<div>
       <div className="container center">
      </div>    
        <Gallery images={IMAGES}/>  
    </div>
    )

}

export default Home

