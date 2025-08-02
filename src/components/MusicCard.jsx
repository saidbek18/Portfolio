// src/components/MusicCard.jsx
import React, { useState, useRef, useEffect } from 'react';
import './MusicCard.css';
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaVolumeUp,
  FaHeart,
  FaTrashAlt,
  FaPlus
} from 'react-icons/fa';
import cdImg from '../assets/s1.jpg';
import song1 from '../assets/1.mp3';
import song2 from '../assets/2.mp3';
import song3 from '../assets/3.mp3';
import song4 from '../assets/4.mp3';
import song5 from '../assets/5.mp3';
import song6 from '../assets/6.mp3';
import song7 from '../assets/7.mp3';
import song8 from '../assets/8.mp3';
import song9 from '../assets/9.mp3';
import song10 from '../assets/10.mp3';
import song11 from '../assets/11.mp3';
import song12 from '../assets/12.mp3';
import song13 from '../assets/13.mp3';
import song14 from '../assets/14.mp3';
import song15 from '../assets/15.mp3';
import song16 from '../assets/16.mp3';
import song17 from '../assets/17.mp3';
import song18 from '../assets/18.mp3';
import song19 from '../assets/19.mp3';
import song20 from '../assets/20.mp3'; 

const songs = [
  { id: 1, title: 'Track One', file: song1 },
  { id: 2, title: 'Track Two', file: song2 },
  { id: 3, title: 'Track Three', file: song3 },
  { id: 4, title: 'Track Four', file: song4 },
  { id: 5, title: 'Track Five', file: song5 },
  { id: 6, title: 'Track Six', file: song6 },
  { id: 7, title: 'Track Seven', file: song7 },
  { id: 8, title: 'Track Eight', file: song8 },
  { id: 9, title: 'Track Nine', file: song9 },
  { id: 10, title: 'Track Ten', file: song10 },
  { id: 11, title: 'Track Eleven', file: song11 },
  { id: 12, title: 'Track Twelve', file: song12 },
  { id: 13, title: 'Track Thirteen', file: song13 },
  { id: 14, title: 'Track Fourteen', file: song14 },
  { id: 15, title: 'Track Fifteen', file: song15 },
  { id: 16, title: 'Track Sixteen', file: song16 },
  { id: 17, title: 'Track Seventeen', file: song17 },
  { id: 18, title: 'Track Eighteen', file: song18 },
  { id: 19, title: 'Track Nineteen', file: song19 },
  { id: 20, title: 'Track Twenty', file: song20 }
];

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

const MusicCard = () => {
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [likes, setLikes] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const shuffled = shuffle([...songs]);
    setPlaylist(shuffled);
    setCurrentIndex(Math.floor(Math.random() * shuffled.length));

    const storedLikes = localStorage.getItem('likedSongs');
    const storedFavorites = localStorage.getItem('favoriteSongs');

    if (storedLikes) setLikes(JSON.parse(storedLikes));
    if (storedFavorites) {
      const parsed = JSON.parse(storedFavorites);
      const filtered = parsed.filter((fav) => songs.find((song) => song.id === fav.id));
      setFavorites(filtered);
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);
// Hooklar orasiga yangi holat qo‘shamiz
const [history, setHistory] = useState([]);
const [historyIndex, setHistoryIndex] = useState(-1);

// shuffle ichida yangi qo‘shiq tanlanganda tarixga qo‘shamiz
useEffect(() => {
  const shuffled = shuffle([...songs]);
  const firstIndex = Math.floor(Math.random() * shuffled.length);
  setPlaylist(shuffled);
  setCurrentIndex(firstIndex);
  setHistory([firstIndex]);
  setHistoryIndex(0);

}, []);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [currentIndex]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const skipNext = () => {
    let next = Math.floor(Math.random() * playlist.length);
    while (next === currentIndex && playlist.length > 1) {
      next = Math.floor(Math.random() * playlist.length);
    }
    setCurrentIndex(next);
    const newHistory = [...history.slice(0, historyIndex + 1), next];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setIsPlaying(true);
  };
  

  const skipPrev = () => {
    if (historyIndex > 0) {
      const prevIndex = history[historyIndex - 1];
      setCurrentIndex(prevIndex);
      setHistoryIndex(historyIndex - 1);
      setIsPlaying(true);
    }
  };
  
  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((current / duration) * 100);
  };

  const handleLike = (id) => {
    const updatedLikes = { ...likes };
    if (updatedLikes[id]) {
      delete updatedLikes[id];
    } else {
      updatedLikes[id] = 1;
    }
    setLikes(updatedLikes);
    localStorage.setItem('likedSongs', JSON.stringify(updatedLikes));
  };

  const addToFavorites = (song) => {
    if (!favorites.find((s) => s.id === song.id)) {
      const updatedFavorites = [...favorites, song];
      setFavorites(updatedFavorites);
      localStorage.setItem('favoriteSongs', JSON.stringify(updatedFavorites));
    }
  };

  const removeFromFavorites = (id) => {
    const updated = favorites.filter((s) => s.id !== id);
    setFavorites(updated);
    localStorage.setItem('favoriteSongs', JSON.stringify(updated));
  };

  const playFavorite = (id) => {
    const index = playlist.findIndex((s) => s.id === id);
    if (index !== -1) {
      setCurrentIndex(index);
      setIsPlaying(true);
    }
  };

  const currentSong = playlist[currentIndex];

  return (
    <div className="music-container">
      <div className="music-card">
        <div className={`cd ${isPlaying ? 'rotate' : ''}`}>
          <img src={cdImg} alt="CD" />
        </div>

        <h3 className="shadow-text">{currentSong?.title}</h3>

        <audio
          ref={audioRef}
          src={currentSong?.file}
          onTimeUpdate={handleTimeUpdate}
          onEnded={skipNext}
        />

        <div className="controls">
          <FaBackward onClick={skipPrev} />
          {isPlaying ? <FaPause onClick={togglePlay} /> : <FaPlay onClick={togglePlay} />}
          <FaForward onClick={skipNext} />
        </div>

        <input
          type="range"
          className="progress"
          value={progress}
          onChange={(e) => {
            const newTime = (e.target.value / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
            setProgress(e.target.value);
          }}
        />

        <div className="volume">
          <FaVolumeUp />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>

        <div className="like-delete">
          <button onClick={() => handleLike(currentSong?.id)}>
            <FaHeart color={likes[currentSong?.id] ? 'red' : 'white'} /> {likes[currentSong?.id] ? 1 : 0}
          </button>
          <button onClick={() => addToFavorites(currentSong)}>
            <FaPlus color="lightgreen" />
          </button>
          <a href={currentSong?.file} download className="download-button">
            ⬇️ Yuklab olish
          </a>
        </div>

        <div className="favorites-inline">
          <h4>Sevimlilar</h4>
          {favorites.length === 0 && <p>Hech narsa yo'q</p>}
          {favorites.map((s) => (
            <div
              key={s.id}
              className="favorite-item"
              onClick={() => playFavorite(s.id)}
            >
              {s.title}
              <FaTrashAlt
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromFavorites(s.id);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
