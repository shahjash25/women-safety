import React from 'react';
import './IncidentReporting.css';

function IncidentReporting() {
  return (
    <div className="incident-reporting">
      <h3 className="incident-reporting-title">Incident Reporting</h3>
      <form className="incident-reporting-form">
        <div className="form-group">
          <label className="form-label">Incident Description:</label>
          <textarea rows="4" className="form-textarea"></textarea>
        </div>
        <button type="submit" className="form-submit-button">Report Incident</button>
      </form>
    </div>
  );
}

export default IncidentReporting;
