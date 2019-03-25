const pjson = require('./package.json');
const bodyParser = require('body-parser');

module.exports = (app) => {

    app.port = 3000;

    app.cotextRoot =  "";
    
    app.endpoint = "http://localhost:" + app.port + app.cotextRoot;
    
    app.use(bodyParser.urlencoded({ extended: true }))
  
    app.use(bodyParser.json())
    
    app.get('/', (req, res) => {
        res.json({"message" : "Welcome to "+pjson.name+"!"});
    });
    
};