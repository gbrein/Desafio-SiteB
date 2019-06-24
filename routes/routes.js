var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/post', (request, response) => {
  response.send('teste');
})

module.exports = router;
