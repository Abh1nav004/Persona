// server/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Database Connection
const MONGODB_URI =  "mongodb://localhost:27017/persona"; // IMPORTANT: Replace with your actual MongoDB URI!
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Home route
app.get("/", (req, res) => {
  res.send("PERSONA Backend is running...");
});

// Use user routes
app.use("/users", userRoutes);

const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));