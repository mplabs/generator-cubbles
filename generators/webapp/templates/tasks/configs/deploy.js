/*jshint node: true */
/*global module */
'use strict';

var path = require('path');

module.exports.tasks = {
    exec: {
        deployLocal: {
            cmd: path.relative('', 'node_modules/.bin/webpackage-uploader') + ' tasks/configs/deployLocal-config.json'
        },
        deployIntegration: {
            cmd: path.relative('', 'node_modules/.bin/webpackage-uploader') +
            ' tasks/configs/deployIntegration-config.json'
        },
        validateWebpackage: {
            cmd: path.relative('', 'node_modules/.bin/validate-webpackage') +
            ' tasks/configs/deployIntegration-config.json'
        }
    }
};
