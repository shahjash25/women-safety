import React from 'react';
import GenderDistributionInsights from './GenderDistributionInsights';
import AnomalyDetectionReports from './AnomalyDetectionReports';
import './AnalyticsDashboard.css';

function AnalyticsDashboard() {
  return (
    <div className="analytics-dashboard">
      <GenderDistributionInsights />
      <AnomalyDetectionReports />
    </div>
  );
}

export default AnalyticsDashboard;
