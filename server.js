var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {

  response.render('pages/form.ejs');

});

// will calculate rate from user selection
app.get('/getRate', function(request, response) {
  var result = calculateRate(request, response);
  response.render('pages/results.ejs', result);

});

function calculateRate(request, response) {
  var weight = request.query.weight;
  var postalType = request.query.postalType;
  var cost = 0.00;
  console.log("Weight: " + weight + "(oz.), " + "Shipping Type: " + postalType);

  switch (postalType) {
    case "Stamped":
      if (weight <= 1) {
        cost = 0.49;
      } else if (weight <= 2) {
        cost = 0.70;
      } else if (weight <= 3) {
        cost = 0.91;
      } else if (weight <= 3.5) {
        cost = 1.12;
      } else {
        console.log("weight limit of 3.5oz, to heavy for stamped letters");
      }
      break;
    case "Metered":
      if (weight <= 1) {
        cost = 0.46;
      } else if (weight <= 2) {
        cost = 0.67;
      } else if (weight <= 3) {
        cost = 0.88;
      } else if (weight <= 3.5) {
        cost = 1.09;
      } else {
        console.log("weight limit of 3.5oz, to heavy for stamped letters");
      }
      break;
    case "Envelope":
      if (weight <= 1) {
        cost = 0.98;
      } else if (weight <= 2) {
        cost = 1.19;
      } else if (weight <= 3) {
        cost = 1.40;
      } else if (weight <= 4) {
        cost = 1.61;
      } else if (weight <= 5) {
        cost = 1.82;
      } else if (weight <= 6) {
        cost = 2.03;
      } else if (weight <= 7) {
        cost = 2.24;
      } else if (weight <= 8) {
        cost = 2.45;
      } else if (weight <= 9) {
        cost = 2.66;
      } else if (weight <= 10) {
        cost = 2.87;
      } else if (weight <= 11) {
        cost = 3.08;
      } else if (weight <= 12) {
        cost = 3.29;
      } else if (weight <= 13) {
        cost = 3.50;
      } else {
        console.log("weight limit of 13oz, to heavy for stamped letters");
      }
      break;
    case "Parcel":
      if (weight <= 1) {
        cost = 2.67;
      } else if (weight <= 2) {
        cost = 2.67;
      } else if (weight <= 3) {
        cost = 2.67;
      } else if (weight <= 4) {
        cost = 2.67;
      } else if (weight <= 5) {
        cost = 2.85;
      } else if (weight <= 6) {
        cost = 3.03;
      } else if (weight <= 7) {
        cost = 3.21;
      } else if (weight <= 8) {
        cost = 3.39;
      } else if (weight <= 9) {
        cost = 3.57;
      } else if (weight <= 10) {
        cost = 3.75;
      } else if (weight <= 11) {
        cost = 3.93;
      } else if (weight <= 12) {
        cost = 4.11;
      } else if (weight <= 13) {
        cost = 4.29;
      } else {
        console.log("weight limit of 13oz, to heavy for stamped letters");
      }
      break;
    default:
      console.log("Error: input was empty");
  }

  return {weight: weight, postalType: postalType, cost: cost.toFixed(2)};
}


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
