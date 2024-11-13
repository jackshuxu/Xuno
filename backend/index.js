const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "POST, GET, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
  })
);
app.use(express.json());

const musicRoutes = require("./routes/musicRoutes");
app.use("/api/music", musicRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Backend server is running." });
});

const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
