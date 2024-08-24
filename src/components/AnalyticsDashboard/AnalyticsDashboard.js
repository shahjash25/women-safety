import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AnalyticsDashboard.css';

const AnalyticsDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedAlert, setSelectedAlert] = useState(null);

  const alerts = [
    { id: 1, type: 'SOS Gesture', date: '2024-08-24', time: '12:30 PM', location: 'Park', image: 'https://via.placeholder.com/600x400?text=Image+1' },
    { id: 2, type: 'Lone Woman Detected', date: '2024-08-24', time: '1:45 AM', location: 'Street', image: 'https://via.placeholder.com/600x400?text=Image+2' },
    { id: 3, type: 'Surrounded by Men', date: '2024-08-23', time: '10:00 PM', location: 'Mall', image: 'https://via.placeholder.com/600x400?text=Image+3' },
    { id: 4, type: 'Unusual Gathering', date: '2024-08-22', time: '9:15 PM', location: 'Park', image: 'https://via.placeholder.com/600x400?text=Image+4' },
    { id: 5, type: 'Lone Woman Detected', date: '2024-08-22', time: '8:00 PM', location: 'Subway', image: 'https://via.placeholder.com/600x400?text=Image+5' },
    { id: 6, type: 'SOS Gesture', date: '2024-08-21', time: '6:00 PM', location: 'Theater', image: 'https://via.placeholder.com/600x400?text=Image+6' },
    { id: 7, type: 'Lone Woman Detected', date: '2024-08-21', time: '7:30 PM', location: 'Subway', image: 'https://via.placeholder.com/600x400?text=Image+7' },
    { id: 8, type: 'Surrounded by Men', date: '2024-08-20', time: '10:30 PM', location: 'Mall', image: 'https://via.placeholder.com/600x400?text=Image+8' },
    { id: 9, type: 'Unusual Gathering', date: '2024-08-19', time: '9:00 PM', location: 'Restaurant', image: 'https://via.placeholder.com/600x400?text=Image+9' },
    { id: 10, type: 'Lone Woman Detected', date: '2024-08-19', time: '8:00 PM', location: 'Street', image: 'https://via.placeholder.com/600x400?text=Image+10' }
  ];

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const alertString = query.get('alert');
    if (alertString) {
      const alert = JSON.parse(decodeURIComponent(alertString));
      setSelectedAlert(alert);
    }
  }, [location.search]);

  const handleRowClick = (alert) => {
    const alertString = encodeURIComponent(JSON.stringify(alert));
    navigate(`/analytics-dashboard?alert=${alertString}`);
  };

  return (
    <div className="analytics-dashboard-container">
      <div className="image-section">
        {selectedAlert && (
          <img src={selectedAlert.image} alt="Alert" className="alert-image" />
        )}
      </div>
      <div className="table-section">
        <h3>Alerts Overview</h3>
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
              <tr key={alert.id} onClick={() => handleRowClick(alert)}>
                <td>{alert.type}</td>
                <td>{alert.date}</td>
                <td>{alert.time}</td>
                <td>{alert.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
