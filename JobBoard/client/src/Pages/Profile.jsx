import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Button,
  Chip,
  Paper,
  Divider,
  Stack,
} from '@mui/material';
import { Download, Edit, Work, School, LocationOn } from '@mui/icons-material';

const JobSeekerProfile = () => {
  const user = {
    name: 'Jane Smith',
    title: 'Full Stack Developer',
    location: 'Ahmedabad, India',
    profilePic: '/user.png',
    skills: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Docker', 'AWS'],
    experience: [
      {
        role: 'MERN Stack Developer',
        company: 'TechX Solutions',
        duration: 'Jan 2023 - Present',
        description: 'Developed scalable web apps and APIs with MERN stack.',
      },
      {
        role: 'Frontend Developer Intern',
        company: 'Startup Hub',
        duration: 'May 2022 - Dec 2022',
        description: 'Worked on responsive UI using React and Tailwind.',
      },
    ],
    education: {
      degree: 'B.E. in Computer Engineering',
      college: 'GTU - Government Engineering College',
      year: '2021 - 2025',
    },
    resume: '/resume/janedoe.pdf',
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', p: 3 , marginLeft: '400px'}}>
      {/* Header */}
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar src={user.profilePic} sx={{ width: 100, height: 100 }} />
          </Grid>
          <Grid item xs>
            <Typography variant="h5" fontWeight="bold">
              {user.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {user.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <LocationOn fontSize="small" sx={{ verticalAlign: 'middle' }} />{' '}
              {user.location}
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" startIcon={<Edit />}>
                Edit
              </Button>
              <Button
                variant="contained"
                startIcon={<Download />}
                href={user.resume}
                download
              >
                Download Resume
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* Skills */}
      <Box mt={4}>
        <Typography variant="h6" fontWeight="bold" mb={1}>
          Skills & Tools
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {user.skills.map((skill) => (
            <Chip key={skill} label={skill} color="primary" />
          ))}
        </Stack>
      </Box>

      {/* Experience */}
      <Box mt={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Work Experience
        </Typography>
        {user.experience.map((exp, index) => (
          <Paper key={index} sx={{ p: 2, mb: 2, borderLeft: '5px solid #1976d2' }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {exp.role} @ {exp.company}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {exp.duration}
            </Typography>
            <Typography mt={1}>{exp.description}</Typography>
          </Paper>
        ))}
      </Box>

      {/* Education */}
      <Box mt={4}>
        <Typography variant="h6" fontWeight="bold" mb={1}>
          Education
        </Typography>
        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            {user.education.degree}
          </Typography>
          <Typography>{user.education.college}</Typography>
          <Typography variant="body2" color="text.secondary">
            {user.education.year}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default JobSeekerProfile;

