const express = require("express");
const Employee = require('../models/employee');
const router = express.Router();


router.get('', function (req, res) {
  Employee.find({}, function (err, foundEmployees) {
    res.json(foundEmployees);
  });
  /*  res.json({'success': true});*/
});

router.get('/:id', function (req, res) {
  const employeeId = req.params.id;
  Employee.findById(employeeId, function (err, foundEmployee) {
    if (err) {
      res.status(422).send({errors: [{title: 'Employee Error!', detail: 'Could not find Employee!'}]})
    }
    res.json(foundEmployee);
  });
});


module.exports = router;
