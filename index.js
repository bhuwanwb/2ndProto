var request = require("request");

module.exports = {
    
    CarMakeModelFunc:function(recive, callback ){
        
        
var base64_car = recive ;

var options = { method: 'POST',
  url: 'https://api.restb.ai/classify',
  headers: 
   { 'postman-token': '954c37fb-cc15-79d0-477d-c0b23f01737d',
     'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },
  form: 
   { client_key: '67f376843d2ea5d113120dbd42951c7509d33e571e00c26ca5621115156ccd30',
     model_id: 'car_make_model',
     image_base64: base64_car } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
    console.log(JSON.parse(body).response.probabilities[0][0][0]);
    console.log(recive);
    var carName=JSON.parse(body).response.probabilities[0][0][0];
    
    callback(carName);
    
    
   //(JSON.parse(body).response.probabilities[0][0][0]).send();
});

    }
}
