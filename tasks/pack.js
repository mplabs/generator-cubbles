module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('pack', 'Pack your files for distribution (internally used for deploy* tasks)', [
        'clean:dist',
     //   'optimize',
        'copy:static',
        'copy:component',
        'string-replace:crc_url',
        'updateWebappManifest',
        'find-in-script-tag:index.html',
        'find-in-json:manifest.cubx'
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
};
