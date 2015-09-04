/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
    availabletasks: {
        tasks: {
            options: {
                filter: 'include',
                tasks: [
                    'pack',
                    'deploy',
                    'deployLocal',
                    'deployIntegration',
                    'deployCustom',
                    'generateDoc',
                    'validateSources',
                    'initGit']
            }
        }
    }
};
