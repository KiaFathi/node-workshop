'use strict';

var express = require('express');
var app = new express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

app.get('/', function(req, res){
  res.send('Hello World!'); 
});

app.post('/doStuff', function(req, res){
  var foo = req.param('foo');

  res.send({
    foo: foo
  });
});

app.listen(3000);