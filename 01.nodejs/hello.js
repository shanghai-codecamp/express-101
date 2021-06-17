// Load HTTP module
const http = require("http");

// Define a few constants
const hostname = "127.0.0.1";
const port = 8000;
const html = `<!doctype html>
<html>
	<head>
		<title>hello</title>
	</head>
	<body>
		<h1>world</h1>
	</body>
</html>`;

// Create HTTP server
const server = http.createServer((req, res) => {
	// Set the response HTTP header wither HTTP status and Content type
	res.writeHead(200, {"Content-Type": "text/html"});

	// Send the response body
	res.end(html);
});

// Print a log once the server starts listening
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

