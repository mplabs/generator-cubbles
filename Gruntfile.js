module.exports = function(grunt) {
    'use strict';

    var chalk = require('chalk');
    // Validate the workspace config (../workspace/.workspace)
    require('./grunt-validate-workspace.js')(grunt);
    // Load grunt tasks.
    require('load-grunt-tasks')(grunt);
    // Load devTools tasks.
    grunt.loadTasks('tasks');

    // Load grunt configurations
    var activeWebPackage = grunt.file.readJSON('../workspace/.workspace').activeWebPackage;
    var options = {
        devtools: grunt.file.readJSON('package.json'),
        workspace: grunt.file.readJSON('../workspace/.workspace'),
        manifestWebpackage: grunt.file.readJSON('../workspace/' + activeWebPackage +'/manifest.webpackage'),
        param: { // Project settings
            src: '../workspace/' + activeWebPackage,
            build: '../workspace/' + activeWebPackage + '_build',
            pack: '../workspace/' + activeWebPackage + '_pack',
            dst: '../workspace/' + activeWebPackage + '_dist',
            tmp: '.tmp'
        },
        config: { // set default configs location
            src: 'tasks/configs/*.js'
        }
    };
    var configs = require('load-grunt-configs')(grunt, options);
    // Define the configuration for all the tasks
    grunt.initConfig(configs);
};
