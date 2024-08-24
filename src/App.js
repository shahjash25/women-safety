import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import RealTimeMonitoring from './components/RealTimeMonitoring';
import IncidentReporting from './components/IncidentReporting';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import UserSettings from './components/UserSettings';
import AlertSystem from './components/AlertSystem'; // Import AlertSystem

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavBar />
        <main>
          <Routes>
            <Route path="/real-time-monitoring" element={<RealTimeMonitoring />} />
            <Route path="/incident-reporting" element={<IncidentReporting />} />
            <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />
            <Route path="/user-settings" element={<UserSettings />} />
            <Route path="/alert-system" element={<AlertSystem />} /> {/* Add route for AlertSystem */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
