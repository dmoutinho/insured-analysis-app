const express = require("express");
const LogBuilder = require('./app/log/log-builder.js');
const log = new LogBuilder(__filename);

const app = express();

require('./app.init')(app);

module.exports.appEndpoint = app.endpoint;

require('./app/routes/insured.analysis.routes')(app);

const server = app.listen(app.port, () => {
    log.debug("Server is listening on port "+app.port);
});

module.exports.server = server;