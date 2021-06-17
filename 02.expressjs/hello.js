// Load express module
const express = require("express");

const app = express();
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

app.get("/", (req, res) => {
	res.send(html);
});

app.listen(port, () => {
	console.log(`Express listening on port ${port}`);
});

