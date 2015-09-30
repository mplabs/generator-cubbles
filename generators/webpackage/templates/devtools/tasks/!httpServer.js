module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('!httpServer', 'Run a http-Server to get http access to your project files and data.', [
        'http-server:dev'
    ]);
};
