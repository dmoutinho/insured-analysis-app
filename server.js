const express = require("express");
const LogBuilder = require('./app/log/log-builder.js');
const log = new LogBuilder(__filename);

const app = express();
const appPort = 3000;

app.get('/', (req, res) => {
    res.json({"message": "Welcome to insured-analysis-app!"});
});

require('./app/routes/insured.analysis.routes')(app);

const server = app.listen(appPort, () => {
    log.debug("Server is listening on port "+appPort);
});

module.exports.server = server;