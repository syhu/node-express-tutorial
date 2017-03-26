var express = require('express')
var ejs = require('ejs')
var app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

// allow POST be accessible 
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

require('./router')(app);
	
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
