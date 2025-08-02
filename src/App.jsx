import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import './App.css';
import Header from './components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MusicCard from './components/MusicCard';
import Footer from './components/Footer';





function Home() {
  return (
    <main style={{ padding: '80px 20px', color: '#fff' }} data-aos="fade-up">
    </main>
  );
}

function About() {
  return (
    <main style={{ padding: '80px 20px', color: '#fff' }}>
      <h1 style={{ textShadow: '0 0 10px #ffffff' }}>Men haqimda</h1>
      <p style={{ textShadow: '0 0 5px #ffffff' }}>Bu yerga batafsil ma’lumotlar yoziladi.</p>
    </main>
  );
}

function Contact() {
  useEffect(() => {
    window.location.href = "https://t.me/Towards_the_void";
  }, []);
  return null;
}

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200); 
    return () => clearTimeout(timer);
  }, [location]); 

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <Header />
      <MusicCard/>
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/batafsil" element={<About />} />
        <Route path="/boglanish" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
