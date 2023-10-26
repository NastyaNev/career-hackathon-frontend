import SlideGallery from 'components/slide-gallery/slide-gallery';
import React from 'react';

function Gellary({ cover, card,  items }) {
  return (
    <>
        {cover}
        <SlideGallery card={card} items={items} />
    </>
  )
}


export default Gellary