module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('!deployLocal', 'Deploy WebPackage to a Cubixx-Base of your choice', [
        'exec:deployLocal'
    ]);
};
