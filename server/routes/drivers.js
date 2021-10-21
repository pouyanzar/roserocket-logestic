const express = require('express');
const router = express.Router();

/* GET users listing. */
module.exports = (db) => {

  router.get('/', function(req, res) {
    db.query('SELECT * FROM drivers')
      .then(data => res.send(data.rows))
      .catch(err => res.send(err));
  });

  return router;
};

