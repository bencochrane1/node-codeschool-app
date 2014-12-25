'use strict';

var _ = require('underscore');

var model = require('../models/badges');

// send badges to the model to be saved
exports.save = function(req, res, next) {
    var badges = _.clone.req.body;
    model.save(badges, function(err){
        if (err) return res.json(503, { error: true });
        next();

    });
};

// send badges to the pub/sub socket in model
exports.send = function(req, res, next) {
    next();
};
