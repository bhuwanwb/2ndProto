var express = require('express')
var bodyParser = require('body-parser');

var app = express()

app.use(bodyParser.urlencoded({ extended: true}));

var CarMakeIndentifier = require('./index.js');

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/CarMake', function (req, res) {
   CarMakeIndentifier.CarMakeModelFunc((carName) =>{ 
        res.send(carName);
   });
})


app.post('/CarMakePost', function (req, res) {
    
    CarMakeIndentifier.CarMakeModelFunc(req.body.Key1, (carName) =>{ 
        
       res.send(carName);
   });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
