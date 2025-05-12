import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FixedLayout from './Layout'; // Assuming the layout is in this component
import { Button, Box, Typography } from '@mui/material';
import './JobListings.css'; // Assuming you have a CSS file for styles

export default function JobListings() {
  const [jobs, setJobs] = useState([]);
  // Or however you're storing auth tokens

  useEffect(() => {
    axios.get('/api/jobroute')
      .then(res => {
        if (res.status === 200) {
          setJobs(res.data);
        } else {
          console.error('Failed to fetch jobs:', res.statusText);
        }
      })
      .catch(err => {
        console.error('Error fetching jobs:', err);
      });
  }, []);


  

  return (
    <FixedLayout>
      <Box className="job-listings-container">
        <Typography variant="h4" className="job-listings-title">Job Listings</Typography>
        <Box className="job-cards-container">
          {jobs.map((job) => (
            <Box key={job._id} className="job-card">
              <Typography variant="h6" className="job-card-title">{job.title}</Typography>
              <Typography className="job-card-company-location">{job.company} | {job.location}</Typography>
              <Typography variant="body2" className="job-card-description">{job.description.slice(0, 100)}...</Typography>
              <Typography variant="body2" className="job-card-jobtype">{job.jobType}</Typography>
              <Box className="job-card-actions">
                <Button size="small" variant="outlined">Apply</Button>
                <Button size="small" variant="text">Details</Button>
      
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </FixedLayout>
  );
}
