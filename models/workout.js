const { strict } = require("assert");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter type of exercise"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter the name of the exercise"
                },
                duration: {
                    type: Number,
                    required: "Enter duration in minutes"
                },
                weight: {
                    type: Number
                },
                sets: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                distance: {
                    type: Number
                }
            }
        ]
    }
)

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;