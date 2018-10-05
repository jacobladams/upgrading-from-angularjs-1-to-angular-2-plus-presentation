const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const testData = require('./testData');
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

let personnel = testData.personnel;
let titles = testData.titles;

app.get('/titles', (req, res) => res.send(titles));

app.get('/personnel', (req, res) => {
	res.send(personnel.sort((a, b) => a.id - b.id));
});

app.get('/personnel/:id', (req, res) => {
	const id = req.params['id'];
	res.send(personnel.find(p => p.id == id));
});

app.post('/personnel/:id', (req, res) => {
	var updatedPersonel = req.body;
    const id = req.params['id'];
	
	var existingPersonnel = personnel.find(p => p.id == id);

	existingPersonnel.firstName = updatedPersonel.firstName;
	existingPersonnel.lastName = updatedPersonel.lastName;
	existingPersonnel.title = updatedPersonel.title;
	// existingPersonnel.detailsUrl = updatedPersonel.detailsUrl;
	// existingPersonnel.image = updatedPersonel.image;
	existingPersonnel.active = updatedPersonel.active;

	//var existingPersonnelIndex = personnel.findIndex(p => p.id == id);

	// const index = personnel.indexOf(existingPersonnel);
	//personnel.splice(existingPersonnelIndex, 1);

	// personnel.remove(existingPersonnel);
	//personnel.push(updatedPersonel);
	// res.send(personnel.find(p=>p.id === id));
	res.send(existingPersonnel);
});

app.get('/help', (req, res) => {
	res.send({helpText:'Help Me Obi Wan Kenobi!'});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
