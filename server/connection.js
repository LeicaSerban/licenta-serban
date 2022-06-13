const mongoose = require("mongoose");

//connect with db

const URI =
"mongodb+srv://Serban:admin@inventar.fgypy.mongodb.net/Premier_League?retryWrites=true&w=majority"
const connectDB = async () => {
  await mongoose.connect(URI, {useNewUrlParser: true});
  console.log("Connection has been made!");
};

module.exports = connectDB;




