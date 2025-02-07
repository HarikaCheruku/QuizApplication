const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// API route to fetch quiz data
app.get("/quiz", async (req, res) => {
    try {
        const apiResponse = await axios.get("https://api.jsonserve.com/Uw5CrX");
        res.json(apiResponse.data);
    } catch (error) {
        console.error("Error fetching quiz data:", error);
        res.status(500).json({ error: "Failed to fetch quiz data" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
