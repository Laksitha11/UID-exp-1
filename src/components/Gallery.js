import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const photos = [
    // Add URLs for your photos here
    'https://tse2.mm.bing.net/th?id=OIP.xJTNT2MmaU1Ek07gwS0dhgHaEo&pid=Api&P=0&h=180',
    'https://tse2.mm.bing.net/th?id=OIP.AbIHnWWNkrs2dZ5jVBziuQHaEo&pid=Api&P=0&h=180',
    'https://tse3.mm.bing.net/th?id=OIP.y6MXl1TwB-x2bZFfTsh7MAHaEK&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.zvTH42gSclJtNydj25IWbAHaE7&pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th?id=OIP.UvtGFUJfwXz8UsoEk6OeUgE8DF&pid=Api&P=0&h=180',
    'https://tse2.mm.bing.net/th?id=OIP.CUNe0F9h4Ifq_3t2COcpowHaE8&pid=Api&P=0&h=180',
    'https://tse3.mm.bing.net/th?id=OIP.UjTDLfeIHahD11vX_HrQTAHaEK&pid=Api&P=0&h=180',
    'https://tse2.mm.bing.net/th?id=OIP.pf8IrwZhJVofQZFuuVTAKAHaE8&pid=Api&P=0&h=180',
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Gallery ${index}`} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
