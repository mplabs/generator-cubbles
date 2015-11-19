'use strict';
var path = require('path');
var _ = require('lodash')

module.exports = function(grunt) {
    require('./lib/cubixx.js')(grunt);
    // Detect the workspace
    var workspaceName = 'webpackages';
    var workspacePath = require('./lib/detect-workspace.js')(grunt, workspaceName);
    var workspaceConfigPath = path.join(workspacePath, '.workspace');
    grunt.verbose.writeln('workspacePath: ' + workspacePath);

    // Validate the workspace config (../workspace/.workspace)
    require('./lib/validate-workspace.js')(grunt, workspacePath);

    /**
     * Define grunt options
     */
    // Default grunt options
    var options = {
        devtools: grunt.file.readJSON('package.json'),
        workspaceName: workspaceName,
        workspacePath: workspacePath,
        workspaceConfigPath: workspaceConfigPath,
        workspaceConfig: grunt.file.readJSON(workspaceConfigPath),
        param: {
            tmp: '.tmp'
        },
        config: { // set default configs location
            src: 'tasks/configs/*.js'
        }
    };

    /**
     * Analyse workspace. If webpackage configured extend the options.
     */
    var activeWebpackage = grunt.file.readJSON(workspaceConfigPath).activeWebpackage;
    if (activeWebpackage && activeWebpackage.length > 0) {
        var manifestWebpackagePath = workspacePath + activeWebpackage + '/manifest.webpackage';
        // If manifestFile exist, define webpackage-related options and merge them into the default-options
        if (grunt.file.isFile(manifestWebpackagePath)) {
            var manifestFileAsJSON = grunt.file.readJSON(manifestWebpackagePath);
            (function() {
                // Webpackage related grunt options
                var webpackageRelatedOptions = {
                    activeWebpackage: activeWebpackage,
                    manifestWebpackagePath: manifestWebpackagePath,
                    manifestWebpackage: manifestFileAsJSON,
                    param: {
                        src: workspacePath + activeWebpackage,
                        dst: workspacePath + activeWebpackage + '@' + manifestFileAsJSON.version,
                        doc: '../docs/' + activeWebpackage
                    }
                };
                options = _.merge(options, webpackageRelatedOptions);
            })();
        } else {
            grunt.fail.fatal('Declared \'activeWebpackage\' NOT found. Please fix ' + workspaceConfigPath);
        }
    }

    /**
     *  Load grunt tasks
     */
    grunt.loadTasks('tasks'); //locally defined tasks
    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', '@*/grunt-*', 'cubx-grunt-*', '@*/cubx-grunt-*']});

    /**
     * Load config from config-files and pass options usable as config-values
     */
    var configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);

    //console.log(grunt.config.get('param.src'));
};
