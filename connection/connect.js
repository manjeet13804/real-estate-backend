const mongoose= require("mongoose");

// mongoose.connect('mongodb://localhost:27017/real-estate')
// .then(console.log("Connected to DataBase"))
//   .catch(console.error);


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
