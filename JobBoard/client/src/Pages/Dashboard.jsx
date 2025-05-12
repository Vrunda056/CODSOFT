// pages/Dashboard.js

import React from 'react';
import { Box, Typography, Grid, Paper, Button, Divider, Avatar } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ExploreIcon from '@mui/icons-material/Explore';
import FixedLayout from './Layout';

const Dashboard = () => {
  return (
    <FixedLayout>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          👋 Welcome Back, Job Seeker!
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Track your journey and explore new opportunities.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={3}>
          {/* Applications Summary */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box display="flex" alignItems="center" mb={1}>
                <WorkIcon sx={{ color: '#1976d2', mr: 1 }} />
                <Typography variant="h6">My Applications</Typography>
              </Box>
              <Typography variant="body2">You have applied to <b>5 jobs</b> this month.</Typography>
              <Button 
                variant="contained"  
                fullWidth 
                sx={{ mt: 2 }} 
                size="small" 
                onClick={() => window.location.href = '/applications'}
              >
                View Applications
              </Button>
            </Paper>
          </Grid>

          {/* Saved Jobs */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box display="flex" alignItems="center" mb={1}>
                <BookmarkIcon sx={{ color: '#d32f2f', mr: 1 }} />
                <Typography variant="h6">Saved Jobs</Typography>
              </Box>
              <Typography variant="body2">You have <b>3 saved jobs</b>.</Typography>
              <Button variant="outlined" fullWidth sx={{ mt: 2 }} size="small" >View Saved</Button>
            </Paper>
          </Grid>

          {/* Suggested Jobs */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box display="flex" alignItems="center" mb={1}>
                <ExploreIcon sx={{ color: '#388e3c', mr: 1 }} />
                <Typography variant="h6">Suggested Jobs</Typography>
              </Box>
              <Typography variant="body2">Based on your profile, here are some suggestions.</Typography>
              <Button variant="text" fullWidth sx={{ mt: 2 }} size="small" onClick={() => window.location.href = '/joblistings'}>Browse Jobs</Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Profile Summary */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom>🧑‍💼 Profile Summary</Typography>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar sx={{ width: 56, height: 56 }}>JS</Avatar>
              <Box>
                <Typography variant="h6">John Smith</Typography>
                <Typography variant="body2">Frontend Developer | React | 2+ yrs experience</Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </FixedLayout>
  );
};

export default Dashboard;
