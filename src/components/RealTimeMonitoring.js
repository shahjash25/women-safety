import React from 'react';
import VideoFeed from './VideoFeed';
import GenderDistributionOverlay from './GenderDistributionOverlay';
import GestureAnalytics from './GestureAnalytics';
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
