module.exports = function(grunt) {
    'use strict';
    grunt.registerMultiTask('find-in-script-tag', 'webpackage-devtemplate!', function() {
        var pattern = this.options().pattern;
        var filter = '.html';
        this.files.forEach(function(file) {

            file.src.filter(function(filepath) {

                // Remove nonexistent files (it's up to you to filter or warn here).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else if (filepath.lastIndexOf(filter) !== filepath.length - filter.length) {
                    grunt.log.warn('Source file "' + filepath + '" not a HTML file.');
                    return false;
                } else {
                    return true;
                }
            }).map(function(filepath) {

                var html = grunt.file.read(filepath);

                var regex = new RegExp('<script.+src=[\'"]([^\'"]+' + pattern + '[^\'"]+)["\']', 'gm');

                var scriptTags = html.match(regex);
                if (scriptTags && scriptTags.length > 0) {
                    scriptTags.forEach(function(item) {
                        //grunt.log.writeln(item);
                        grunt.fail.warn('The file ' + filepath + ' contains an script tag  with string \'' + pattern +
                            '\' in src url: ' + item);
                    });
                }
            });

        });
    });

};
