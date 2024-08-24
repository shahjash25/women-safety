import React from 'react';
import './AlertLog.css';

function AlertLog() {
  return (
    <div className="alert-log">
      <h4>Alert Log</h4>
      <table className="alert-log-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Time</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Unusual Activity</td>
            <td>12:45 PM</td>
            <td>Main Street</td>
            <td>Resolved</td>
          </tr>
          <tr>
            <td>Lone Woman Detected</td>
            <td>11:30 AM</td>
            <td>City Park</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Surrounded by Men</td>
            <td>10:00 AM</td>
            <td>Shopping Mall</td>
            <td>Reviewed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AlertLog;
