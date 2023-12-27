import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../../constants'; 
import logo1 from '../../assets/logo1.PNG';
 import './header.css';


const Header = () => {
  
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 800;
    } else {
      current.scrollLeft += 800;
    }
  };
  
return(
  <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
          <div className="gpt3__header-image">
              <img src={logo1} alt="logo1"  />
          </div>
      <div className="gpt3__header-content__input">
          <input type="phone" placeholder="Your phone number" />
          <button type="button">Get Started</button>
      </div>
      </div>
    <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.person1new3, images.person2, images.person3new1].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
             
            
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
</div>
);
};

export default Header