const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("Node Js Server is Running!Port:", PORT);
})



