module.exports = function(grunt) {
    'use strict';

    var chalk = require('chalk');

    // Load grunt tasks.
    require('load-grunt-tasks')(grunt);
    grunt.loadTasks('tasks');

    // Load grunt configurations
    var options = {
        ide: grunt.file.readJSON('package.json'),
        manifestWebpackage: grunt.file.readJSON('../workspace/webpackage/manifest.webpackage'),
        param: { // Project settings
            src: '../workspace/webpackage',
            build: '../workspace/webpackage_build',
            pack: '../workspace/webpackage_pack',
            dst: '../workspace/webpackage_dist',
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
