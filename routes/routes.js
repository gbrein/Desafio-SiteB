const express = require('express');
const router = express.Router();
const data = require('../data.json');
const app = express();
let bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get', (request, response) => {
  response.json(data);
});

router.post('/post', jsonParser, (request, response) => {
  // const newData = request.body.formData;
  console.log(request.body)
})

module.exports = router;


