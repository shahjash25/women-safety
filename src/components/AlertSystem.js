import React from 'react';
import AlertLog from './AlertLog';
import HeatMap from './HeatMap';
import AlertNotification from './AlertNotification';
import './AlertSystem.css';

function AlertSystem() {
  return (
    <div className="alert-system">
      <div className="alert-system-header">
        <h3>Alert System</h3>
      </div>
      <div className="alert-system-body">
        <div className="alert-log-container">
          <AlertLog />
        </div>
        <div className="heatmap-container">
          <HeatMap />
        </div>
      </div>
      <AlertNotification />
    </div>
  );
}

export default AlertSystem;
