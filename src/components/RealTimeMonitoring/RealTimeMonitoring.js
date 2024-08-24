import React from 'react';
import VideoFeed from '../VideoFeed/VideoFeed';
import GenderDistributionOverlay from '../GenderDistributionOverlay/GenderDistributionOverlay';
import GestureAnalytics from '../GestureAnalytics/GestureAnalytics';
import './RealTimeMonitoring.css';

function RealTimeMonitoring() {
  return (
    <div className="real-time-monitoring-container">
      <div className="video-section">
        <VideoFeed />
      </div>
      <div className="analytics-section">
        <GenderDistributionOverlay />
        <GestureAnalytics />
      </div>
    </div>
  );
}

export default RealTimeMonitoring;
