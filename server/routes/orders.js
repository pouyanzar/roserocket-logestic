const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get('/', (req, res) => {
    db.query('SELECT * FROM orders JOIN drivers ON drivers.id = driver_id')
      .then(data => res.json(data.rows))
      .catch(err => res.send(err));
  });
  
  router.get('/unassigned', (req, res) => {
    db.query(`SELECT * FROM orders WHERE driver_id IS NULL`)
      .then(data => res.send(data.rows))
      .catch(err => res.send(err));
  });
  
  router.get('/:orderId', (req, res) => {
    const orderId = req.params.orderId;
    db.query(`SELECT * FROM orders JOIN drivers ON drivers.id = driver_id WHERE orders.id = $1`, [orderId])
      .then(data => res.send(data.rows))
      .catch(err => res.send(err));
  });

  return router;
};