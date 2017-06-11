'use strict';

(function (routes) {
    routes.registerApiRoutes = function (app) {
        const express = require('express');
        const router = express.Router();
        const arabic = require('./arabic');
        const roman = require('./roman');

        router.use('/roman', roman);
        router.use('/arabic', arabic);

        app.use('/api', router);
    };
})(module.exports);
