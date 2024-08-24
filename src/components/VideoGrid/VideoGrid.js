import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoGrid.css';

const VideoGrid = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -scrollContainerRef.current.clientWidth : scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Dummy video URLs and locations
  const videos = [
    { url: 'https://www.w3schools.com/html/mov_bbb.mp4', location: 'Park' },
    { url: 'https://www.w3schools.com/html/mov_bbb.mp4', location: 'Street' },
    { url: 'https://www.w3schools.com/html/mov_bbb.mp4', location: 'Mall' },
    { url: 'https://www.w3schools.com/html/mov_bbb.mp4', location: 'Subway' },
    { url: 'https://www.w3schools.com/html/mov_bbb.mp4', location: 'Office' },
    // Add more videos here
  ];

  const handleVideoClick = (url) => {
    navigate('/real-time-monitoring', { state: { videoUrl: url } });
  };

  return (
    <div className="video-grid-container">
      <button className="scroll-button left" onClick={() => handleScroll('left')}>←</button>
      <div className="video-grid" ref={scrollContainerRef}>
        {videos.map((video, index) => (
          <div key={index} className="video-grid-item" onClick={() => handleVideoClick(video.url)}>
            <video src={video.url} controls muted />
            <div className="video-location">{video.location}</div>
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={() => handleScroll('right')}>→</button>
    </div>
  );
};

export default VideoGrid;
