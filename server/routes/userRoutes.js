import express from 'express';
import mongoose from 'mongoose';

// Define Mongoose schema (adjust to your actual data structure)
const userSchema = new mongoose.Schema({
  name: String,
  testResults: [{
    date: Date,
    traits: {
      openness: Number,
      conscientiousness: Number,
      extraversion: Number,
      agreeableness: Number,
      neuroticism: Number,
    },
  }],
});

const User = mongoose.model('User', userSchema);

const router = express.Router();

// Get user data
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId); // Use Mongoose
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Failed to fetch user data" });
  }
});

// Submit test results
router.post("/:userId/results", async (req, res) => {
  try {
    const { userId } = req.params;
    const { results } = req.body;

    if (!results) {
      return res.status(400).json({ error: "Results are required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.testResults.push({ date: new Date(), traits: results }); // Add result
    await user.save(); // Save the updated user document

    res.status(201).json(user); // Respond with the updated user data

  } catch (error) {
    console.error("Error saving test results:", error);
    res.status(500).json({ error: "Failed to save test results" });
  }
});

// Get test history
router.get("/:userId/history", async (req, res) => {
 try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user.testResults); // Send back the test results array
  } catch (error) {
    console.error("Error fetching test history:", error);
    res.status(500).json({ error: "Failed to fetch test history" });
  }
});

export default router;