const assert = require('assert');
const request = require('request');
const appEndpoint = require('../../server').appEndpoint;
const message = require('../../app/utils/message.utils.js');
const Insured = require('../../app/models/insured.model');

function dateStr(date) {
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
}

function decYears(date,years) {
    date.setFullYear(date.getFullYear()-years);
    return date;
}

describe('analysis api', function() {
    describe('check analysis', function() {
        it('should return analysis', function(done) {
            let ins = new Insured({
                birthday : dateStr(decYears(new Date(),25)),
                document : "99999999997"
            });
            request.put(appEndpoint+'/analysis', { json : ins }, (err, res, body) => {
                if (err) assert.fail(err);
                assert.equal(body.status,ins.STATUS_ENUM.ANALYSIS);
                assert.equal(res.statusCode,200);
                done();
            });
        });
    });
    describe('check approved', function() {
        it('should return approved', function(done) {
            let ins = new Insured({
                birthday : dateStr(decYears(new Date(),30)),
                document : "99999999997"
            });
            request.put(appEndpoint+'/analysis', { json : ins }, (err, res, body) => {
                if (err) assert.fail(err);
                assert.equal(body.status,ins.STATUS_ENUM.APROVED);
                assert.equal(res.statusCode,200);
                done();
            });
        });
    });
    describe('check declined', function() {
        it('should return declined', function(done) {
            let ins = new Insured({
                birthday : dateStr(decYears(new Date(),30)),
                document : "99999999999"
            });
            request.put(appEndpoint+'/analysis', { json : ins }, (err, res, body) => {
                if (err) assert.fail(err);
                assert.equal(body.status,ins.STATUS_ENUM.DECLINED);
                assert.equal(res.statusCode,200);
                done();
            });
        });
    });      
});