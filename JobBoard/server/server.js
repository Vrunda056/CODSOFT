const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const jobRoutes = require('./routes/jobroute');
const authRoutes = require('./routes/auth'); // Import the authentication routes
const applicationRoutes = require('./routes/applicationroute'); // Import the application routes
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // or "*" during dev
    credentials: true
  }));

const dburl = 'mongodb://127.0.0.1:27017/JobBoard';

 main()
.then((res) => {
    console.log("conected");
}).catch((err) =>{
    console.log("err");
});

async function main() {
    await mongoose.connect(dburl,{
        useNewUrlParser : true,
        useUnifiedTopology: true
    });
}

// Root route
app.get('/', (req, res) => { res.send('Welcome to the Job Board Server!');});
app.use('/api/applicationroute', applicationRoutes);
app.use('/api/jobroute', jobRoutes);
app.use('/api/auth', authRoutes); // Assuming you have a login route


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});