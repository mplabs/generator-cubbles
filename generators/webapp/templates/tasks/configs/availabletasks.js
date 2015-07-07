/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
    availabletasks: {
        tasks: {
            options: {
                filter: 'include',
                tasks: ['pack', 'deployLocal', 'deployIntegration', 'generateDoc', 'validateSources', 'initGit']
            }
        }
    }
};
