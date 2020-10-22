const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/workout", (req, res) => {
    db.Workout.find({})
    .populate("workouts")
    .then((foundWorkouts) => {
        res.json(foundWorkouts);
    })
    .catch((err) => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Unable to find workout",
        });
    });
});

router.post("/api/workout", (req, res) => {
    db.Workout.create(req.body)
    .then((newWorkout) => {
        res.json(newWorkout);
    })
    .catch((err) => {
        console.log({
            error: true,
            data: null,
            message: "Unable to create workout",
        });
    });
});

router.put("/api/workout/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updateWorkout) => {
        res.json(updateWorkout);
    })
    .catch((err) => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Unable to update workout",
        });
    });
});

module.exports = router;