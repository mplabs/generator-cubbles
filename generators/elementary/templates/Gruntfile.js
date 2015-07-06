module.exports = function(grunt) {
    'use strict';

    // measures the time each task takes
    //require('time-grunt')(grunt);

    // Load the plugin that provides tasks.
    require('load-grunt-tasks')(grunt);

    // Load all custom tasks
    grunt.loadTasks('tasks');
    // Load grunt configurations
    var options = {
        config: { // set default configs location
            src: 'tasks/configs/*.js'
        },
        pkg: grunt.file.readJSON('package.json'),
        param: { // Project settings
            src: 'public',
            build: 'build',
            tmp: '.tmp',
            dst: 'dist',
            pack: 'pack',
            www: 'www'
        }
    };
    var configs = require('load-grunt-configs')(grunt, options);
    // Define the configuration for all the tasks
    grunt.initConfig(configs);

    // Default task.
    grunt.registerTask('default', [
        'welcome', 'availabletasks'
    ]);

    // intemediate task to optimize resources
    grunt.registerTask('optimize', [
        'copy:build',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'htmlmin',
        'usemin'
    ]);

    grunt.registerTask('pack', 'Pack your files for distribution (internally used for deploy* tasks)', [
        'clean:dist',
        'optimize',
        'copy:static',
        'copy:component',
        'string-replace:crc_url',
        'updateWebappManifest'
    ]);

    grunt.registerTask('deployLocal', 'Deploy WebPackage to Cubixx-Base at http://boot2docker.me', [
        'pack',
        'exec:deployLocal'
    ]);

    grunt.registerTask('deployIntegration', 'Deploy WebPackage to Cubixx-Base at https://webblebase.net', [
        'pack',
        'excec:deployIntegration'
    ]);

    grunt.registerTask('validateSources', 'validate js and css', [
        'jshint', 'jscs', 'jsonlint', 'csslint', 'sloc'
        ]);

    grunt.registerTask('generateDocs', 'generate documentation', [
        'clean:docs', 'validateSources', 'jsdoc'
    ]);

    grunt.registerTask('updateWebappManifest', [
        'package-param', 'json-replace:manifest.webapp'
    ]);
};
