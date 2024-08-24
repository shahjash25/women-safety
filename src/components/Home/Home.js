import React from 'react';
import AlertLog from '../AlertLog/AlertLog';
import HeatMap from '../HeatMap/HeatMap';
import VideoGrid from '../VideoGrid/VideoGrid';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="alert-heatmap-container">
        <div className="alert-log-container">
          <AlertLog />
        </div>
        <div className="heatmap-container">
          <HeatMap />
        </div>
      </div>
      <VideoGrid />
    </div>
  );
}

export default Home;
