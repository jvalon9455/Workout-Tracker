const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const logger = require("morgan");


const PORT = process.env.PORT || 3000;


// add express middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const workoutController = require("./controllers/workoutController");
app.use(workoutController);

app.use(logger("dev"));

// add mongoose middleware
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
    console.log("Mongoose connection error: ", err);
});

// shows that backend server is listening
app.get("/api/config", (req, res) => {
    res.json({
        success: true,
    });
});

// html routes
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
})

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});