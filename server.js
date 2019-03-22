const express = require("express");
const LogBuilder = require('./app/log/log-builder.js');
const log = new LogBuilder(__filename);
const bodyParser = require('body-parser');

const app = express();
const appPort = 3000;

const apiCotextRoot =  "";
const apiEndpoint =  "http://localhost:" + appPort + apiCotextRoot;
module.exports.apiEndpoint = apiEndpoint;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.json({"message": "Welcome to insured-analysis-app!"});
});

require('./app/routes/insured.analysis.routes')(app);

const server = app.listen(appPort, () => {
    log.debug("Server is listening on port "+appPort);
});

module.exports.server = server;