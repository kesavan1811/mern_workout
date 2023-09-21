const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth);

// Get all
router.get("/", getWorkouts);

// Get single
router.get("/:id", getWorkout);

// Post a new one
router.post("/", createWorkout);

// Delete
router.delete("/:id", deleteWorkout);

// Update
router.patch("/:id", updateWorkout);

module.exports = router;
