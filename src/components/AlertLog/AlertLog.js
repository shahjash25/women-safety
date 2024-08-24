import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AlertLog.css';

function AlertLog() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/incidents')
      .then(response => setAlerts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="alert-log">
      <h3>Recent Alerts</h3>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map(alert => (
            <tr key={alert.id}>
              <td>{alert.type}</td>
              <td>{new Date(alert.date).toLocaleDateString()}</td>
              <td>{alert.time}</td>
              <td>{alert.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlertLog;
