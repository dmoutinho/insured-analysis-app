const assert = require('assert');
const Insured = require('../app/models/insured.model');

function dateStr(date) {
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
}

function decYears(date,years) {
    date.setFullYear(date.getFullYear()-years);
    return date;
}

describe('insured.model.test.js', function() {
    describe('check age', function() {
        it('should return 15 years', function(done) {
               let insured = new Insured({
                birthday : dateStr(decYears(new Date(),15)),
                document : "99999999999"
            });
            assert.ok(insured.calcAge()==15);
            done();
        });
    });
    describe('check teenager', function() {
        it('should return teenager', function(done) {
               let insured = new Insured({
                birthday : dateStr(decYears(new Date(),15)),
                document : "99999999999"
            });
            assert.ok(insured.isTeenager());
            done();
        });
    });
    describe('check not teenager', function() {
        it('should return not teenager', function(done) {
               let insured = new Insured({
                birthday : dateStr(decYears(new Date(),18)),
                document : "99999999999"
            });
            assert.ok(!insured.isTeenager());
            done();
        });
    });
    describe('check teenager', function() {
        it('should return younger', function(done) {
               let insured = new Insured({
                birthday : dateStr(decYears(new Date(),25)),
                document : "99999999999"
            });
            assert.ok(insured.isYounger());
            done();
        });
    });
    describe('check not younger', function() {
        it('should return not younger', function(done) {
               let insured = new Insured({
                birthday : dateStr(decYears(new Date(),30)),
                document : "99999999999"
            });
            assert.ok(!insured.isYounger());
            done();
        });
    });
    describe('check valid document', function() {
        it('should return valid document', function(done) {
               let insured = new Insured({
                birthday : dateStr(decYears(new Date(),35)),
                document : "99999999998"
            });
            assert.ok(insured.validateDocument());
            done();
        });
    });
    describe('check invalid document', function() {
        it('should return invalid document', function(done) {
               let insured = new Insured({
                birthday : dateStr(decYears(new Date(),35)),
                document : "99999999999"
            });
            assert.ok(!insured.validateDocument());
            done();
        });
    });
    describe('check analysis', function() {
        it('should return analysis', function(done) {
               let insured = new Insured({
                birthday : dateStr(decYears(new Date(),25)),
                document : "99999999997"
            });
            console.log(insured.analyze());
            assert.ok(insured.analyze()===1);
            done();
        });
    });
    // ANALYSIS : 1,
	// APROVED : 2, 
	// DECLINED : 3

});