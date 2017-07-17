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
   { client_key: '3381c86e56594e84ceeb9675cbaf2eef4344256952e87190ee0b4f1b7d086ab7',
     model_id: 'car_make_model',
     image_base64: base64_car } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
        try{
    console.log(JSON.parse(body).response.probabilities[0][0][0]);
   // console.log(recive);
    var carName=JSON.parse(body).response.probabilities[0][0][0];

    callback(carName);
    }
    catch(e){
        callback("Error");
    }
    
   //(JSON.parse(body).response.probabilities[0][0][0]).send();
});

    }
    ,
    
    getCarNumber:function(recive, callback ){
        
var request = require("request");
console.log("Base64"+JSON.stringify(recive));        

var options = { method: 'POST',
  url: 'https://api.openalpr.com/v2/recognize_bytes',
  qs: 
   { secret_key: 'sk_11df43c5913273242b1e9756',
     recognize_vehicle: '0',
     country: 'gb',
     return_image: '0',
     topn: '10' },
  headers: 
   { 'postman-token': '2f612f3a-58a8-1c01-8646-d107adde9aac',
     'cache-control': 'no-cache',
     'content-type': 'application/json' },
  body:recive};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
 try{
  console.log(body);
   
    callback(JSON.parse(body).results[0].plate);
    }
    catch(e){
         callback("Error");
          console.log("Error 1")
    }
});

    }
}




