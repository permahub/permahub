import { useState, useEffect } from 'react';
import './HackathonMetrics.css';

export default function HackathonMetrics() {
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    // Function to calculate days remaining
    const calculateDaysRemaining = () => {
      const deadline = new Date('2025-08-07T23:59:59');
      const now = new Date();
      const diffTime = deadline.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysRemaining(Math.max(0, diffDays));
    };

    // Calculate initially
    calculateDaysRemaining();

    // Update every day at midnight
    const timer = setInterval(() => {
      calculateDaysRemaining();
    }, 86400000); // 24 hours in milliseconds

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="metrics-container">
      <div className="metrics-grid">
        <div className="metric-card">
          <h3 className="prize-pool-title">Prize Pool</h3>
          <div className="metric-value">$39,000</div>
          <div className="metric-label">Total Prizes</div>
        </div>
        <div className="metric-card">
          <h3 className="grand-prize-title">Grand Prize</h3>
          <div className="metric-value">$25,000</div>
          <div className="metric-label">First Place</div>
        </div>
        <div className="metric-card">
          <h3 className="track-prizes-title">Track Prizes</h3>
          <div className="metric-value">4</div>
          <div className="metric-label">$2,500 Each</div>
        </div>
        <div className="metric-card">
          <h3 className="registration-title">Registration</h3>
          <div className="metric-value">{daysRemaining}</div>
          <div className="metric-label">{daysRemaining === 1 ? 'Day' : 'Days'} Until Deadline</div>
        </div>
      </div>
    </div>
  );
} 