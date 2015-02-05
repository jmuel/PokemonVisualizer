var express = require('express');
var app = express();
var port = process.env.PORT || 12345;


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.use('/js', express.static(__dirname + '/dist/js'))

app.listen(port, function() {
    console.log('App started on port ', port);
});