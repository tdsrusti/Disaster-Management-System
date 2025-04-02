const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
<<<<<<< HEAD
=======
const sosRoutes = require("./routes/sosRoutes");
const callRoutes = require("./routes/callRoutes") // <-- Add SOS Route
>>>>>>> dba02cfc104640a731511fab05b15625b9e9d3c2
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Set up EJS for rendering views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from public/
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/auth", authRoutes);
<<<<<<< HEAD
=======
app.use("/api/sos", sosRoutes); // <-- Add this line
app.use(callRoutes);
>>>>>>> dba02cfc104640a731511fab05b15625b9e9d3c2

// Render pages
app.get("/", (req, res) => {
  res.render("register"); // Renders views/register.ejs
});

app.get("/login", (req, res) => {
  res.render("login"); // Renders views/login.ejs
});

app.get("/forgotpassword", (req, res) => {
  res.render("forgotpassword"); // Ensure forgotpassword.ejs exists inside the views folder
});

app.get("/home", (req, res) => {
  res.render("homepage"); // Ensure homepage.ejs exists inside views folder
});

app.get("/sos", (req,res) =>{
  res.render("sos");
});

<<<<<<< HEAD
=======
app.get("/call", (req, res) => {
  res.render("call");
});

>>>>>>> dba02cfc104640a731511fab05b15625b9e9d3c2
app.get("/map", (req,res) =>{
  res.render("map");
});

app.get("/profile", (req,res) =>{
  res.render("profile");
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
