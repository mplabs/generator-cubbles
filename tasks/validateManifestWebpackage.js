module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('+webpackage-validateManifestFile', 'Validate \'manifest.webpackage\' file.',function() {
        var WebpackageDocument = require('webpackage-document-api/public/lib/WebPackageDocument');
        var doc = new WebpackageDocument(grunt.config.get('manifestWebpackage'));
        //
        var onSuccess = function() {
            //
        };
        var onUnsupportedModelVersionError = function(error) {
            grunt.fail.fatal(error);
        };
        var onValidationError = function(errors) {
            errors.forEach(function(error){grunt.log.writeln('Validation Error: ' + error.dataPath + ' >>> ' + error.message);})
            //for (var i = 0; i < errors.length; i++) {
            //    grunt.log.writeln(errors[i]);
            //}
            //grunt.log.writeln(error);
            grunt.fail.fatal('Validation failed.');
        };
        doc.validate(onSuccess, onUnsupportedModelVersionError, onValidationError);
    });
};
