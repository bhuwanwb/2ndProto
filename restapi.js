var express = require('express')
var bodyParser = require('body-parser');

var app = express()
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true}));

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


app.post('/CarLicensePlate', function (req, res) {
    
    console.log("Base64"+(req.body.numberPlateValue));
    
    CarMakeIndentifier.getCarNumber(req.body.numberPlateValue, (carName) =>{ 
        
       res.send(carName);
   });
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
