var path = require("path");
var express = require("express");
var app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
		res.render('index');
})
app.get('/marketing', function(req, res) {
		res.render('marketing');
})
app.get('/coding', function(req, res) {
		res.render('coding');
})
app.get('/about', function(req, res) {
		res.render('about');
})
app.listen(8000, function() {
	console.log("listening on port 8000");
})