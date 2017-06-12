'use strict';

(function (routes) {
    function apiErrorHandler (error, request, response, next) {
        response.status(error.statusCode || 500);
        response.send({
            message: error.message,
            name: error.name
        });
    }

    routes.registerApiRoutes = function (app) {
        const express = require('express');
        const router = express.Router();
        const arabic = require('./arabic');
        const roman = require('./roman');

        router.use('/roman', roman);
        router.use('/arabic', arabic);

        app.use('/api', router);
        app.use('/api', apiErrorHandler);
    };
})(module.exports);
