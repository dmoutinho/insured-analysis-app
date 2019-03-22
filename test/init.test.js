const server = require('../server.js').server;

describe("insured-analysis-app",function(){
    require('./insured.model.test.js');
    require('./api/insured.analysis.test.js');
    after(function(done) {
        server.close(done);
    });
});