/**
 * Sample task to print welcome ASCII figure
 */
module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('deploy', 'Deploy WebPackage to a Cubixx-Base of your choice', [
        'prompt:deployCustom',
        'pack',
        'exec:deployCustom'
    ]);
};
