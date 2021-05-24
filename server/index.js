const express = require('express');
const mongoose = require("mongoose");
const config = require('./config/dev');
const Employee = require('./models/employee');
const FakeDb = require('./fake-db');
const employeeRoutes = require('./routes/employees');

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDb connected');
  const fakeDb = new FakeDb();
  //push data to mongoDb server
  fakeDb.seedDb();
})

const app = express();

app.use("/api/v1/employees", employeeRoutes);

/*app.get('/users', function (req, res) {

  res.json({"success": true});

})*/

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("Node Js Server is Running!Port:", PORT);
})





