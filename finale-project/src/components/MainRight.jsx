  // Lightbox.js

import React, { useState } from 'react';
import thumbnail1 from '../images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../images/image-product-4-thumbnail.jpg';
import product1 from '../images/image-product-1.jpg';
import product2 from '../images/image-product-2.jpg';
import product3 from '../images/image-product-3.jpg';
import product4 from '../images/image-product-4.jpg';


const images = [
  { thumbnail: thumbnail1, main: product1 },
  { thumbnail: thumbnail2, main: product2 },
  { thumbnail: thumbnail3, main: product3 },
  { thumbnail: thumbnail4, main: product4 },
];

const Lightbox = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickThumbnail = (index) => {
    setActiveIndex(index);

  };

  return (
    <div className="lightbox-container">
      <div className="main-image">
        <img className='main-image-px' src={images[activeIndex].main} alt={`Product ${activeIndex + 1}`} />
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            alt={`Thumbnail ${index + 1}`}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => handleClickThumbnail(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Lightbox;
