const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {

    db.query('SELECT orders.id, description, cost, revenue, drivers.name as drive_name FROM orders JOIN drivers ON drivers.id = driver_id')
      .then(data => res.json(data.rows))
      .catch(err => res.send(err));
  });




  return router;
};