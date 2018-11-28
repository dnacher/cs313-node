const express = require('express');
const authorRouter = express.Router();
const authorSrvc = require('../services/author.service');

//var app = express();
module.exports = authorRouter;

authorRouter.get('/author', (req, res) => {
  res.status(200).json({ author: 'tito' });
});

authorRouter.get('author/:id', (req, res) => {
  console.log("author By Id");
  var id = req.params.id;
  authorSrvc.getAuthorById(id)
      .then(resp => {
          console.log("Response:" + JSON.stringify(resp.rows[0]));
          res.end(JSON.stringify(resp.rows[0]));
      })
      .catch(e => {
          console.log("Error:" + e);
      });
});