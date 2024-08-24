import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavBar from './components/TopNavbar/TopNavBar';
import RealTimeMonitoring from './components/RealTimeMonitoring/RealTimeMonitoring';
import IncidentReporting from './components/IncidentReporting/IncidentReporting';
import AnalyticsDashboard from './components/AnalyticsDashboard/AnalyticsDashboard';
import UserSettings from './components/UserSettings/UserSettings';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/real-time-monitoring" element={<RealTimeMonitoring />} />
            <Route path="/incident-reporting" element={<IncidentReporting />} />
            <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />
            <Route path="/user-settings" element={<UserSettings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
