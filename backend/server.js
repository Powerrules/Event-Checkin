require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const checkinRoutes = require('./routes/checkin');

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json({ limit: '5mb' }));

const PORT = process.env.PORT || 5000;

// --- Mongoose Connection Changes ---
// Removed useNewUrlParser: true and useUnifiedTopology: true
// as they are deprecated and no longer supported in modern Mongoose/MongoDB drivers (v6.0+).
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('MongoDB connected successfully'))
.catch((err)=> { 
    console.error('MongoDB connection error:', err); 
    // It's good practice to exit the process if the DB connection fails
    process.exit(1); 
});
// -----------------------------------

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/checkin', checkinRoutes);

app.get('/', (req, res) => res.send('Event Checkin API'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));