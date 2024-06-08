const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./Config/db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => [res.send("Hello")]);

const PORT = process.env.PORT || 8080;
connectDB();
app.listen(PORT, () => {
  console.log(`Server Started at port No http://localhost:${PORT}`);
});
