
const express = require("express");
const mongoose = require('mongoose');
const userRoutes = require("./routes/user");
const propertyRoutes=require("./routes/property")
const connect = require("./connection/connect");
var jwt = require('jsonwebtoken');
const cors=require("cors")
const secret = "ESTATE"

const app =  express()

app.use("/api/user",userRoutes)
app.use("/api/property",propertyRoutes)

app.use(cors({
    origin:"*"
}))

app.listen(5000, () => console.log("The server is up at 5000 port"));
