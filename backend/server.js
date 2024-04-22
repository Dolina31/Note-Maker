const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

//connexion à la DB
connectDB();

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//middleware
app.use(express.json());
app.use(express.urlencoded({ extented: false }));

app.use("/note", require("./routes/notes.routes"));

//lance le server
app.listen(port, () => console.log("Le server à démarré au port " + port));
