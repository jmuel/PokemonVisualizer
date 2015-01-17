var app = require('express')();
var port = process.env.PORT || 12345;


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.get('/bundle.js', function(req, res) {
    res.sendFile(__dirname + '/dist/bundle.js');
});

app.listen(port, function() {
    console.log('App started on port ', port);
});