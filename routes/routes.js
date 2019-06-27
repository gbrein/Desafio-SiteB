const express = require('express');
const router = express.Router();
let dataBase = require('../data.json');
const app = express();
let bodyParser = require('body-parser');
const fs = require('fs');
const file = '../data.json'
 

var jsonParser = bodyParser.json()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/get', (request, response) => {
    var content = fs.readFileSync(file)
    let c = (content);
});

router.post('/post', jsonParser, (request, response) => {
    let data = request.body;
    let jsonData = JSON.stringify(data);

    let jsonBase = JSON
        .stringify(dataBase)
        .replace("[", "")
        .replace("]", "") + ',' + jsonData;
    jsonBase = '[' + jsonBase + ']';

    fs.writeFile('./data.json', jsonBase, (err) => {
        if (err) 
            throw err;
        console.log('The file has been saved!');
    });
})

module.exports = router;
