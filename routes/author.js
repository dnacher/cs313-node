const routes = require('express').Router();
const authorSrvc = require('./services/author.service');

routes.get('/author', (req, res) => {
  res.status(200).json({ author: 'Display' });
});

module.exports = routes;

app.get('/author/:id', (req, res) => {
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