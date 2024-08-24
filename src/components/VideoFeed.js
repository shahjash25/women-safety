import React from 'react';
import './VideoFeed.css';

function VideoFeed() {
  return (
    <div className="video-feed-container">
      <video src="video-source-url" controls autoPlay muted className="video-player"></video>
    </div>
  );
}

export default VideoFeed;
