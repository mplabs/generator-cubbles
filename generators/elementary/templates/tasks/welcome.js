/**
 * Sample task to print welcome ASCII figure
 */
module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('welcome', 'webpackage-devtemplate!', function() {
        grunt.log.writeln('                 _     _     _ ');
        grunt.log.writeln(' _      _  __   / /_   / /_  / /__');
        grunt.log.writeln('| | /| / / _ \\/ _  \\/ _  \\/ / _ \\');
        grunt.log.writeln('| |/ |/ / ____/ /_/ / /_/ / / ____ ');
        grunt.log.writeln('|__/|__/\\___/\\_.__/\\_.__/_/\\___/ ');
        grunt.log.writeln('');

    });
};
