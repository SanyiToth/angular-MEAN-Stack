const express = require('express');
const mongoose = require("mongoose");
const config = require('./config/dev');
const Employee = require('./models/employee');


mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express();


app.get('/users', function (req, res) {

  res.json({"success": true});

})

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("Node Js Server is Running!Port:", PORT);
})





