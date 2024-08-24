import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './IncidentReporting.css';

function IncidentReporting() {
  const [incident, setIncident] = useState({
    date: '',
    time: '',
    type: '',
    location: '',
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setIncident(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(incident).forEach(key => {
      formData.append(key, incident[key]);
    });

    try {
      const response = await fetch('http://localhost:5000/incidents', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Incident Reported');
        navigate('/'); // Redirect to home route
      } else {
        console.error('Failed to report incident');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="incident-reporting">
      <h3 className="incident-reporting-title">Incident Reporting</h3>
      <form className="incident-reporting-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Date:</label>
          <input
            type="date"
            name="date"
            value={incident.date}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Time:</label>
          <input
            type="time"
            name="time"
            value={incident.time}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Type:</label>
          <input
            type="text"
            name="type"
            value={incident.type}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Location:</label>
          <input
            type="text"
            name="location"
            value={incident.location}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Upload Image (Optional):</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-submit-button">Report Incident</button>
      </form>
    </div>
  );
}

export default IncidentReporting;
