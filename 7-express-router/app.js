var express = require('express')
var ejs = require('ejs')
var app = express()

//app.engine('ejs', ejs)
app.set('view engine', 'ejs')
app.set('views', './views')

require('./router')(app);
	
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
