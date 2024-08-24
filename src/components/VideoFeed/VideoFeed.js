import React from 'react';
import { useLocation } from 'react-router-dom';
import './VideoFeed.css';

const VideoFeed = () => {
  const location = useLocation();
  const videoUrl = location.state?.videoUrl || '';

  return (
    <div className="video-feed-container">
      <h2>Real-Time Monitoring</h2>
      <div className="video-container">
        {videoUrl ? (
          <video src={videoUrl} controls autoPlay muted />
        ) : (
          <p>No video selected.</p>
        )}
      </div>
    </div>
  );
};

export default VideoFeed;
