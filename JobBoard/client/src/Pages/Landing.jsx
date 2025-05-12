import React from 'react';
import './Landing.css';

// const Landing = () => {
//     return (
//         <div className="landing-container">
//             <header className="landing-header">
//                 <h1 className="landing-title">Welcome to JobBoard</h1>
//                 <p className="landing-subtitle">Your gateway to endless career opportunities</p>
//                 <button className="landing-btn">Get Started</button>
//             </header>
//             <section className="landing-features">
//                 <div className="feature">
//                     <h2>Find Your Dream Job</h2>
//                     <p>Search thousands of job listings tailored to your skills and interests.</p>
//                 </div>
//                 <div className="feature">
//                     <h2>Connect with Top Companies</h2>
//                     <p>Build your network and get noticed by leading employers.</p>
//                 </div>
//                 <div className="feature">
//                     <h2>Boost Your Career</h2>
//                     <p>Access resources to enhance your skills and grow professionally.</p>
//                 </div>
//             </section>
//             <footer className="landing-footer">
//                 <p>&copy; 2023 JobBoard. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// };

// export default Landing;

import { Button, AppBar, Toolbar, Typography, Container, Grid, Box } from "@mui/material";

export default function LandingPage() {
  return (
    <div style={{ backgroundImage: "url(https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=IWQzVeh6--ZOe9YxB1-EI1KSWooYTpZS2sqe6Zu6GJM=)" }}>

      {/* Header */}
      <AppBar position="static" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            JobLink PRO
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography component="a" href="#features" sx={{ color: "white", textDecoration: "none" }}>Features</Typography>
            <Typography component="a" href="#employers" sx={{ color: "white", textDecoration: "none" }}>Employers</Typography>
            <Typography component="a" href="#candidates" sx={{ color: "white", textDecoration: "none" }}>Candidates</Typography>
            <Typography component="a" href="#contact" sx={{ color: "white", textDecoration: "none" }}>Contact</Typography>
            <Button variant="contained" color="primary">Get Started</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ textAlign: "center", py: 12 }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Find Your Dream Job or Hire Top Talent
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, maxWidth: 600, margin: "0 auto" }}>
          The complete job portal built with React & Material UI. Whether you're hiring or job hunting, we've got you covered.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Explore Jobs
        </Button>
      </Container>

      {/* Features */}
      <Box id="features" sx={{ bgcolor: "white", color: "black", py: 10 }}>
        <Container>
          <Grid container spacing={4} justifyContent="center" textAlign="center">
            <Grid item xs={12} md={4}>
              <Typography variant="h3" color="primary" fontWeight="bold">500+</Typography>
              <Typography variant="subtitle1" fontWeight="bold">Active Listings</Typography>
              <Typography>Discover thousands of opportunities every day</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h3" color="primary" fontWeight="bold">300+</Typography>
              <Typography variant="subtitle1" fontWeight="bold">Companies</Typography>
              <Typography>Top employers from every industry</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h3" color="primary" fontWeight="bold">24/7</Typography>
              <Typography variant="subtitle1" fontWeight="bold">Support</Typography>
              <Typography>Our team is here to help you anytime</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: "black", color: "white", py: 3, textAlign: "center" }}>
        <Typography>&copy; 2025 JobLink. All rights reserved.</Typography>
      </Box>
    </div>
  );
}