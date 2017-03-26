module.exports = function (app) {

	app.get('/', function (req, res) {
		res.send('Hello World!')
	});
	
	app.get('/hello', function (req, res) {
		res.render('hello', {name: req.query.name});
	});	
		
	app.get('/login', function (req, res) {
		res.render('login', {name: req.query.name});
	});	
};


