import express, { query } from "express";

const app = express();

app.get("/", (req, res) => {
	console.log(req, query);
	res.send("Forspørgsel sendt");
});

app.get("/about", (req, res) => {
	console.log(req.query);
	res.send("om os");
});
app.listen(4000, () => {
	console.log("Server started on port 4000");
});
