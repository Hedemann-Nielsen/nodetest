import express from "express";

const app = express();
app.get("/", (request, response) => {
	console.log(request.query);
	response.send("Forspørgsel sendt");
});
app.get("/about", (req, res) => {
	res.send("Om os");
});
app.get("/products/:id([0-9]*)", (req, res) => {
	console.log(req.params.id);
	res.send("Prdukter");
});
// kan fanges i browser med http://localhost:4000/products/430 430=id kan være et hvilket som helst tal. ([0-9]*) er en regex
app.listen(4000, () => {
	console.log("server med express siger hej");
});
