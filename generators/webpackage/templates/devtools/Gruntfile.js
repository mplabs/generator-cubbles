var fs = require('fs');
module.exports = function(grunt) {
    'use strict';

    var chalk = require('chalk');
    // Validate the workspace config (../workspace/.workspace)
    var workspacePath = require('./grunt-detect-workspace.js')(grunt);
    // Validate the workspace config (../workspace/.workspace)
    require('./grunt-validate-workspace.js')(grunt, workspacePath);

    // Load grunt tasks.
    require('load-grunt-tasks')(grunt);
    // Load devTools tasks.
    grunt.loadTasks('tasks');

    // Load grunt configurations
    var activeWebPackage = grunt.file.readJSON(workspacePath + '.workspace').activeWebPackage;
    var manifestFile = workspacePath + activeWebPackage + '/manifest.webpackage';
    var options = {
        devtools: grunt.file.readJSON('package.json'),
        workspace: grunt.file.readJSON(workspacePath + '.workspace'),
        param: { // Project settings
            src: workspacePath + activeWebPackage,
            build: workspacePath + activeWebPackage + '_build',
            pack: workspacePath + activeWebPackage + '_pack',
            dst: workspacePath + activeWebPackage + '_dist',
            tmp: '.tmp'
        },
        config: { // set default configs location
            src: 'tasks/configs/*.js'
        }
    };
    if (grunt.file.isFile(manifestFile)) {
        options.manifestWebpackage = grunt.file.readJSON(manifestFile)
    }
    var configs = require('load-grunt-configs')(grunt, options);
    // Define the configuration for all the tasks
    grunt.initConfig(configs);
}
;
