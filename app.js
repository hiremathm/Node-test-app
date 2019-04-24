var http = require('http')
http.createServer((req, res) => {
	res.end("Hello!!!!, This is my first node app.")
}).listen(3000);

console.log("Server is runnig http://127.0.0.1:3000")