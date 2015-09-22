module.exports = function(grunt) {
    'use strict';
    grunt.registerMultiTask('package-param', 'webpackage-devtemplate!', function() {
        var file = grunt.file.expand(this.data);
        var config = grunt.file.readJSON(file);
        grunt.config.set('param.name', config.name);
        grunt.config.set('param.version', config.version);
        grunt.config.set('param.description', config.description);

    });
};
