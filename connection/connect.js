const mongoose= require("mongoose");

mongoose.connect('mongodb://localhost:27017/real-estate')
.then(console.log("Connected to DataBase"))
  .catch(console.error);