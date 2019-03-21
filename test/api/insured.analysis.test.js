
const assert = require('assert');
const Insured = require('../app/models/insured.model');

describe('insured.model.test.js', function() {
    describe('firstName required', function() {
        it('should return array with FIRSTNAME_REQUIRED', function(done) {
            let erros = (new Insured({})).validate();
            assert.ok(erros.indexOf("FIRSTNAME_REQUIRED")!=-1);
            //assert.ok(false);
        });
    });
});