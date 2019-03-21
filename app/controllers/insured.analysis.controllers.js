const LogBuilder = require('../log/log-builder.js');
const log = new LogBuilder(__filename);
const message = require('../utils/message.utils.js');

exports.analysis = (req, res) => {
    try {
        let insured = new Isnured(req.body);
        let status = insured.analysis(); 
        log.debug("analysis: "+JSON.stringify(status));
        res.status(200).send(status);
    } catch (error) {
        log.debug("analysis error: "+error.message);
        res.status(500).send({
            message: message.CONST.INTERNAL_ERROR
        });               
    }
};