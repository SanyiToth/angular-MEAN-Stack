const express = require('express');

const app = express();


app.get('/users', function(req, res){

  res.json({"success" : true });

})

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("Node Js Server is Running!Port:", PORT);
})



