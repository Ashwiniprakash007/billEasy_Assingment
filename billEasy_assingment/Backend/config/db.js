const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://ashwini_mishra:8252672662@cluster0.izr7bmg.mongodb.net/?retryWrites=true&w=majority"
);

module.exports = connection;
