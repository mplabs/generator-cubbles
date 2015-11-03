'use strict';
var path = require('path');
module.exports = function(grunt) {
    // Validate the workspace config (../workspace/.workspace)
    var workspacePath = require('./grunt-detect-workspace.js')(grunt, 'webpackages');
    // Validate the workspace config (../workspace/.workspace)
    require('./grunt-validate-workspace.js')(grunt, workspacePath);

    // Load devTools tasks.
    grunt.loadTasks('tasks');

    // Load grunt tasks from plugins.
    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', '@*/grunt-*', 'cubx-grunt-*', '@*/cubx-grunt-*']});

    // Load grunt configurations
    var workspaceConfigPath = path.join(workspacePath, '.workspace');
    var activeWebPackage = grunt.file.readJSON(workspaceConfigPath).activeWebPackage;
    var manifestFile = workspacePath + activeWebPackage + '/manifest.webpackage';
    var options = {
        devtools: grunt.file.readJSON('package.json'),
        workspaceConfigPath: workspaceConfigPath,
        workspaceConfig: grunt.file.readJSON(workspaceConfigPath),
        workspacePath: workspacePath,
        param: { // Project settings
            src: workspacePath + activeWebPackage,
            build: workspacePath + activeWebPackage + '_build',
            pack: workspacePath + activeWebPackage + '_pack',
            dst: workspacePath + activeWebPackage + '_dist',
            doc: '../docs/' + activeWebPackage,
            tmp: '.tmp'
        },
        config: { // set default configs location
            src: 'tasks/configs/*.js'
        }
    };
    if (grunt.file.isFile(manifestFile)) {
        options.manifestWebpackage = grunt.file.readJSON(manifestFile);
    }
    var configs = require('load-grunt-configs')(grunt, options);
    // Define the configuration for all the tasks
    grunt.initConfig(configs);
}
;
