import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaCheckCircle } from 'react-icons/fa';

import {
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaBullhorn,
  FaUserAlt,
  FaHeadphones,
} from 'react-icons/fa';

  
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3><FaBullhorn /> Reklama</h3>
        <p>
          Web sayt, portfolio va musiqiy platformalar yaratish xizmati mavjud!
        </p>
      </div>

      <div className="footer-section">
        <h3><FaUserAlt /> Men haqimda</h3>
        <p>
          Men Saidbek — front-end dasturchiman. Musiqa saytlar, portfoliolar va zamonaviy interaktiv saytlar yarataman.
          12.06.2009 yilda tug‘ilganman.
          <br />
        </p>
      </div>

      <div className="footer-section">
        <h3><FaHeadphones /> Foydali bo‘limlar</h3>
        <ul>
          <li>
            <Link to="/musics"><FaHeadphones /> Musiqa (Hali mavjud emas)</Link>
          </li>
          <li>
            <Link to="/portfolio"><FaUserAlt /> Malumotlar (MAvjud emas)</Link>
          </li>
          <li>
            <Link to="/reklama"><FaBullhorn /> Reklama haqida (Mavjud emas)</Link>
          </li>
        </ul>
      </div>

      <div className="footer-section social">
        <h3>Ijtimoiy tarmoqlar</h3>
        <div className="social-icons">
          <Link to="https://t.me/zxsaikomusic"><FaTelegramPlane /></Link>
          <Link to="https://instagram.com/24_kamolov"><FaInstagram /></Link>
          <Link to="https://youtube.com/zxsaikol"><FaYoutube /></Link>
        </div>
      </div>


      <div className="footer-bottom">
        <p>© 2025 Saidbek. Barcha huquqlar himoyalangan.
            Powered by - Saidbek
        </p>
      </div>
    </footer>
  );
};

export default Footer;
