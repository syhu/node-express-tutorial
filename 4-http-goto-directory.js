const http = require('http');
const url = require('url');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {

	var list = [];
	var path = url.parse(req.url).pathname;
	var prev_path = path.split('/').slice(0,-1).join('/');
	var baseFolder = '.' + path;

	var onDone = function () {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		var back = (path === '/' ? '' : '<a href="' + (prev_path === '' ? '/' : prev_path) + '">..</a><br>');
		res.end(back + list.join(''));
	}
	
	fs.readdir(baseFolder, (err, files) => {
		if (err) { console.error(err); return;}

		if (files.length === 0)
			return onDone();
		
		for (var i=0; i < files.length; i++) {
			fs.stat(baseFolder + '/' + files[i], function (err, stats) {

				if (stats.isDirectory())
					list.push('<a href="' + (path === '/' ? '' : path) + '/' + this.filename + '">' + this.filename + '</a><br>');
				else 
					list.push(this.filename + '<br>');
				
				if (list.length === this.size)
					return onDone();

			}.bind({filename: files[i], size: files.length}));
		}
	})
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
