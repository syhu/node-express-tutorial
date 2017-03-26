const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const testFolder = './';
const fs = require('fs');

const server = http.createServer((req, res) => {

	var list = '';
	
	fs.readdir(testFolder, (err, files) => {
		files.forEach(file => {
			list += (file + '<br>');
		});
	})
	
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end(list);
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
