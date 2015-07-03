/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
    exec: {
        deployLocal: {
            cmd: 'webpackage-uploader tasks/configs/deployLocal-config.json'
        },
        deployIntegration: {
            cmd: 'webpackage-uploader tasks/configs/deployIntegration-config.json'
        }
    }
};
