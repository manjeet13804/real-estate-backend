
const express = require("express");
const mongoose = require('mongoose');
mongoose.connect(
  "mongodb+srv://lalatendu_14:Liku2324@cluster0.cb2danw.mongodb.net/realestateproject?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("successfully connected to db");
  },
  (err) => {
    console.log(err);
  }
);

const userRoutes = require("./routes/user");
const propertyRoutes=require("./routes/property")
// const assetsRoutes = require("./routes/assets")
// const connect = require("./connection/connect");
var jwt = require('jsonwebtoken');
const cors=require("cors")
const secret = "ESTATE"

const app =  express()

app.use("/api/user",userRoutes)
app.use("/api/property",propertyRoutes)
// app.use("/api/property",assetsRoutes)
app.use(cors({
    origin:"*"
}))

app.listen(5000, () => console.log("The server is up at 5000 port"));

// Access-Control-Allow-Origin
