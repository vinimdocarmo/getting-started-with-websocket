var server = require('http').createServer(handler),
 	fs = require('fs');

server.listen(3000);

console.log('Running at localhost:' + server.address().port);

function handler(req, res) {
	fs.readFile(__dirname + '/index.html', function(err, data) {
		if(err) {
			res.writeHead(500);
			return res.end('Error loading index.html');
		}

		res.writeHead(200);
		res.end(data);
	});
}