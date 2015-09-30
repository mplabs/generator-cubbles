/**
 * Sample task to print welcome ASCII figure
 */
module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('!deployIntegration', 'Deploy WebPackage to Cubixx-Base at https://webblebase.net', [
        'pack',
        'exec:deployIntegration'
    ]);
};
