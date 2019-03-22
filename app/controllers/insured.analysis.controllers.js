const LogBuilder = require('../log/log-builder.js');
const log = new LogBuilder(__filename);
const message = require('../utils/message.utils.js');
const Insured = require("../models/insured.model")

exports.analysis = (req, res) => {
    try {
        let insured = new Insured(req.body);
        log.debug("analysis insured: "+JSON.stringify(insured));        
        let insStatus = insured.analyze(); 
        log.debug("analysis: "+JSON.stringify(insStatus));
        res.status(200).send(insStatus);
    } catch (error) {
        log.debug("analysis error: "+error.message);
        res.status(500).send({
            message: message.CONST.INTERNAL_ERROR
        });               
    }
};