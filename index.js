const express = require('express');
const app = express();
const port = 4050;
const cors = require('cors');
const moment = require('moment');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json'));
app.use(cors());
const title = 'FIN4OracleEngine';

app.listen(port, () => console.log(title + ' listening on port ' + port));

app.get('/', (req, res) => res.send(title));

app.post('/sensor', (request, response) => {
	console.log('Received sensor request: ', request.query);

	// e.g. http://localhost:4050/sensor?id=123&data=something

	let timestamp = Math.round(moment().valueOf());
	let sensorID = request.query.id;
	let data = request.query.data;
	let contractAddress = config.Fin4OracleHubAddress;

	// TODO

	response.send('Request received');
});
