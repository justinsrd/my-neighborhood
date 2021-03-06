var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var ZID = require('./config.js').ZID;
var parseString = require('xml2js').parseString;
var util = require('util');
var request = require('superagent');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname));

app.get('/neighborhoods', function(req, res) {
	var url = 'http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=' + ZID + '&state=wa&city=seattle&childtype=neighborhood';
	request
		.get(url)
		.end(function(err, data) {
			if (err) {
				console.log(err);
			} else {
				res.send(data.text);
			}
		})
});

app.get('/:name', function(req, res) {
  var name = req.params.name;
  var url = 'http://www.zillow.com/webservice/GetDemographics.htm?zws-id=' + ZID + '&state=WA&city=Seattle&neighborhood=' + name;
  request
  .get(url)
  .end(function(err,data) {
    if (err) {
      console.log('err', err);
    }
    res.send(data.text);
  });
});


app.listen(PORT, function() {
  console.log('\nServer is running on port ' + PORT + '.....\n');
});
