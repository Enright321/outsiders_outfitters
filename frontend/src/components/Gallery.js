import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get('/api/gallery');
      setLoading(false);
      setGallery(data);
    };
    fetchData();
  }, []);

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {' '}
          <div className={model ? 'model open' : 'model'}>
            <img src={tempImgSrc} alt='gallery' />
            <i
              onClick={() => setModel(false)}
              className='fas fa-times model-close-btn'
            ></i>
          </div>
          <div className='gallery'>
            {gallery.map((item, index) => (
              <div
                className='pics'
                key={index}
                onClick={() => getImg(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{ width: '100%' }}
                ></img>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Gallery;
