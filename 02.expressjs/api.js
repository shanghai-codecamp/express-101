// Load express module
const express = require("express");

const app = express();
// Use this built-in middleware to parse
// incoming requests with JSON payloads.
app.use(express.json());

const port = 8000;

const data = [
	{ id: 1, name: "foo" },
	{ id: 2, name: "bar" },
	{ id: 3, name: "baz" },
];

// Return the data array
app.get("/", (req, res) => {
	res.json(data);
});

// Get one specific item
app.get("/:id", (req, res) => {
	for (let idx = 0; idx < data.length; idx++) {
		if (data[idx].id == req.params.id) {
			res.json(data[idx]);
			return;
		}
	}
	// HTTP 404 Not Found
	res.status(404).end();
});

// Add item to the data array
// and return 200 status
app.post("/", (req, res) => {
	// By default, the `req.body` is undefined. As we enabled
	// expree.json() middleware, this req.body would be a JSON
	// object.
	data.push(req.body);
	// HTTP 200 OK
	res.status(200).end();
});

// Update item name from the data array by ID
app.put("/", (req, res) => {
	// TODO check req.body format
	const item = data.find(el => el.id == req.body.id);
	if (item != null) {
		item.name = req.body.name;
		res.status(200).end();
	} else {
		// HTTP 503 Service Unavailable
		res.status(503).end();
	}
});

// Delete item from the data array.
app.delete("/:id", (req, res) => {
	for (let idx = 0; idx < data.length; idx++) {
		if (data[idx].id == req.params.id) {
			data.splice(idx, 1);
			res.status(200).end();
			return;
		}
	}

	res.status(503).end();
});

app.listen(port, () => {
	console.log(`Express listening on port ${port}`);
});

