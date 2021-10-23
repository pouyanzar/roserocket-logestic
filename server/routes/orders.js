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
    const {orderId, driverId} = req.body;
    db.query(`SELECT * FROM orders WHERE id = $1`, [orderId])
      .then(data => {
        if (data.rows[0]['driver_id'] === null) {
          db.query(`UPDATE orders SET driver_id = $1 WHERE id = $2 RETURNING *`, [driverId, orderId])
            .then(data => res.send(data.rows[0]))
            .catch(err => res.send(err));
        } else {
          res.send("The order is already assigned!");
        }
      })
      .catch(err => res.send(err));
  });

  router.post('/unassign', (req, res) => {
    const {orderId} = req.body;
    db.query(`UPDATE orders SET driver_id = NULL WHERE id = $1 RETURNING *`, [orderId])
      .then(data => res.send(data.rows[0]))
      .catch(err => res.send(err));
  });

  router.post('/edit/:id', (req, res) => {
    const {cost, revenue, id} = req.body;
    console.log(cost, revenue, id);
    db.query(`UPDATE orders SET cost = $1, revenue = $2 WHERE id = $3`, [cost, revenue, id])
      .then(res.send("cost and revenue updated!"))
      .catch(err => res.send(err));
  });
   
  return router;
};