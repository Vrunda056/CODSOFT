import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FixedLayout from './Layout'; // Your existing layout
import './Applications.css'; // Style here

export default function Applications() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    axios.get('/api/applicationroute')
      .then(res => {
        if (res.status === 200) {
          console.log('Applications fetched:', res.data);
          setApps(res.data);
        } else {
          console.error('Unexpected response:', res);
        }
      })
      .catch(err => {
        console.error('Error fetching applications:', err.message);
      });
  }, []);

  return (
    <FixedLayout>
      <div className="applications-wrapper">
        <div className="applications-list">
          {apps.map((application) => {
            console.log(application);
            return (
              <div className="application-card" key={application._id}>
                <div className="header">
                  <h3>{application.applicantName}</h3>
                  <span className={`status ${application.status.toLowerCase()}`}>{application.status}</span>
                </div>
                <p className="email">📧 {application.applicantEmail}</p>
                <p><strong>Resume:</strong> {application.resume}</p>
                {application.coverLetter && (
                  <p><strong>Cover Letter:</strong> {application.coverLetter}</p>
                )}
                <p><strong>Applied At:</strong> {new Date(application.appliedAt).toLocaleDateString()}</p>

              </div>
            );
          })}
        </div>
      </div>
    </FixedLayout>
  );
}

