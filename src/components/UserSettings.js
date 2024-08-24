import React from 'react';
import './UserSettings.css';

function UserSettings() {
  return (
    <div className="user-settings">
      <h3 className="settings-title">Settings</h3>
      
      {/* Monitoring Settings */}
      <div className="monitoring-settings">
        <h4 className="section-title">Monitoring Settings</h4>
        <label className="range-label">
          Gesture Detection Sensitivity:
          <input type="range" min="1" max="10" className="range-slider" />
        </label>
      </div>
      
      {/* Privacy Controls */}
      <div className="privacy-controls">
        <h4 className="section-title">Privacy Controls</h4>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" />
          Disable Video Feed
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" />
          Anonymize Gender Distribution Data
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" />
          Limit Sharing of Alerts with Law Enforcement
        </label>
      </div>
    </div>
  );
}

export default UserSettings;
