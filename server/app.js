const express = require("express")
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Artisan's Corner API is running ")
});

module.exports = app;
