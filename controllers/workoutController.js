const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .populate("workouts")
        .then((foundWorkout) => {
            res.json(foundWorkout);
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

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((foundWorkout) => {
        res.json(foundWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          data: null,
        });
      });
  });

  router.get("/api/workouts/:id", (req, res) => {
    db.Workout.find({})
      .then((foundWorkout) => {
        res.json(foundWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          data: null,
          message: "Unable to get workout"
        });
      });
  });

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then((newWorkout) => {
            res.json(newWorkout);
        })
        .catch((err) => {
            console.log(err)
            res.json({
                error: true,
                data: null,
                message: "Unable to create workout",
            });
        });
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, req.body, { $push: { exercise: req.body } })
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

router.delete("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndDelete(req.params.id)
        .then((deletedWorkout) => {
            res.json(deletedWorkout);
        })
        .catch((err) => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Unable to delete workout"
        });
    });
});

module.exports = router;