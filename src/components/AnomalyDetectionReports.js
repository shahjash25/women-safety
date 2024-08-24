import React from 'react';
import './AnomalyDetectionReports.css';

function AnomalyDetectionReports() {
  return (
    <div className="anomaly-reports">
      <h4>Anomaly Detection Reports</h4>
      <div className="reports-container">
        <table className="reports-table">
          <thead>
            <tr>
              <th>Incident Type</th>
              <th>Date</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Unusual Gesture</td>
              <td>2024-08-24</td>
              <td>Downtown</td>
              <td>Reviewed</td>
            </tr>
            <tr>
              <td>Lone Woman Detected</td>
              <td>2024-08-23</td>
              <td>City Park</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Surrounded by Men</td>
              <td>2024-08-22</td>
              <td>Shopping Mall</td>
              <td>Reviewed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AnomalyDetectionReports;
