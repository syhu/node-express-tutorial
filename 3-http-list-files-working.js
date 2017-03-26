const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const testFolder = './';
const fs = require('fs');

const server = http.createServer((req, res) => {

	var list = '';
	
	fs.readdir(testFolder, (err, files) => {
		
		files.forEach((file, idx, array) => {
			list += (file + '<br>');
			
			if (idx === array.length - 1){ 
				console.log("Last callback call at index " + idx + " with value: " + files);

				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/html');
				res.end(list);
			}			
		});
	})
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
