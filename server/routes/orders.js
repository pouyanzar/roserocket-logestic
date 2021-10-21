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

  router.post('/assign', (req, res) => {
    const {orderId, driverId, cost, revenue} = req.body;
    db.query(`SELECT * FROM orders WHERE id = $1`, [orderId])
      .then(data => {
        if (data.rows[0]['driver_id'] === null) {
          db.query(`UPDATE orders SET driver_id = $1, cost = $2, revenue = $3 WHERE id = $4 RETURNING *`, [driverId, cost, revenue,orderId])
            .then(res.send("Order assigned!"))
            .catch(err => res.send(err));
        } else {
          res.send("The order is already assigned!");
        }
      })
      .catch(err => res.send(err));
  });
  return router;
};