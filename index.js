const express = require('express');
const app = express();
const port = 4050;
const cors = require('cors');
const moment = require('moment');
const config = require('./config.json');
app.use(cors());
const title = 'FIN4OracleEngine';

const HDWalletProvider = require('@truffle/hdwallet-provider');
const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
const networkID = 0;
const networkURL = 'http://localhost:7545'; // 'https://rinkeby.infura.io/v3/' + config.INFURA_API_KEY;
const provider = new HDWalletProvider(config.ORACLE_ACCOUNT.MNEMONIC, networkURL);
const web3 = new Web3(provider);
const accountAddress = web3.currentProvider.addresses[0];
let privateKey = Buffer.from(config.ORACLE_ACCOUNT.PRIVATE_KEY, 'hex');

app.listen(port, () => console.log(title + ' listening on port ' + port));

app.get('/', (req, res) => res.send(title));

app.post('/sensor', (request, response) => {
	console.log('Received sensor request: ', request.query);

	// e.g. http://localhost:4050/sensor?id=123&data=something

	let timestamp = Math.round(moment().valueOf());
	let sensorID = request.query.id;
	let data = request.query.data;
	let contractAddress = config.Fin4OracleHubAddress;

	callFin4OracleHub(contractAddress, sensorID, timestamp, data, response);
});

let callFin4OracleHub = async function(contractAddress, sensorID, timestamp, data, response) {
	console.log('Attempting to call Fin4OracleHub.receiveSensorSignal()', contractAddress, sensorID, timestamp, data);

	// TODO
	// --> receiveSensorSignal(string memory sensorID, uint timestamp, string memory data)

	response.send('Request received');
};
