function Insured(insured) {
	if(insured) {
		this.document = insured.document;
        this.birthday = insured.birthday;
 	} 
}

function calcAge() {
    return Math.trunc(Math.abs((new Date()) - new Date(this.birthday)) / 31536000000);
}
Insured.prototype.calcAge = calcAge;

function isTeenager() {
    return this.calcAge() < 18;
}
Insured.prototype.isTeenager = isTeenager;

function isYounger() {
    return  18 < this.calcAge() && this.calcAge() < 30;
}
Insured.prototype.isYounger = isYounger;

function validateDocument() {
    return !['99999999999','888888888888','77777777777'].includes(this.document);
}
Insured.prototype.validateDocument = validateDocument;

const STATUS_ENUM = Object.freeze({
	ANALYSIS : 1,
	APROVED : 2, 
	DECLINED : 3
});
Insured.prototype.STATUS_ENUM = STATUS_ENUM;

Insured.prototype.analyze = function() {
	let result = STATUS_ENUM.ANALYSIS;

    let isAproved = !this.isTeenager() && !this.isYounger() && this.validateDocument(); 
    let isDeclined = this.validateDocument(); 

    if(isAproved) {
        result = STATUS_ENUM.APROVED;
    } else if(isDeclined) {
        result = STATUS_ENUM.DECLINED;
    } else 

    return result;
};

module.exports = Insured;

module.exports.STATUS_ENUM = STATUS_ENUM;