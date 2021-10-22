const express = require('express');
const router = express.Router();

/* GET users listing. */
module.exports = (db) => {

  router.get('/', function(req, res) {
    db.query('SELECT * FROM drivers')
      .then(data => res.send(data.rows))
      .catch(err => res.send(err));
  });

  router.get('/:driverId', (req, res) => {
    const driverId = req.params.driverId;
    db.query(`SELECT * FROM drivers JOIN orders ON drivers.id = driver_id WHERE drivers.id = $1`, [driverId])
      .then(data => res.send(data.rows))
      .catch(err => res.send(err));
  });
  

  return router;
};

