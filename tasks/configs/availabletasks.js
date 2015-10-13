/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
    availabletasks: {
        tasks: {
            options: {
                filter: 'include',
                tasks: ['+httpServer-start', '+webpackage-deploy', '+webpackage-deployLocal', '+webpackage-deployIntegration', '+webpackage-validateManifestFile', '+workspace-createWebPackage'],
                sort: true
            }
        }
    }
};
