const express = require("express");

module.exports = (app) => {

    const insuredAnalysisController = require('../controllers/insured.analysis.controllers');

    app.put('/analysis', insuredAnalysisController.analysis);
    
}