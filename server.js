const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./src/routes/userRoutes");


const app = express();
app.use(express.json());

// Routes
app.use("/api", userRoutes);

// MongoDB connection and server start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => console.log("MongoDB connection error:", err));
