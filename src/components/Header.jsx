import React, { useState, useEffect } from 'react';
import './Header.css';

const images = [
  '/item/1.png',
  '/item/2.png',
  '/item/3.png',
  '/item/4.png',
  '/item/5.png',
  '/item/6.png',
  '/item/7.png',
  '/item/8.png',
  '/item/9.png',
  '/item/10.png',
];

function Header() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const goTo = (i) => setIndex(i);

  return (
    <div className="header-wrapper">
      <div className="header-left">
        <h1>Portfolio saytga xush kelibsiz</h1>
        <p>
          Men Saidbek — zamonaviy frontend dasturchiman. Quyida mening ishlarim va musiqalardan bahramand bo‘ling. <br />
          Barcha audio va rasm materiallari havolalar orqali mavjud!
        </p>
      </div>

      <div className="header-right">
        <div className="carousel-frame">
          <div className="carousel-box">
            <img
              src={images[index]}
              alt={`slide-${index}`}
              className="carousel-image"
              draggable={false}
            />
          </div>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
