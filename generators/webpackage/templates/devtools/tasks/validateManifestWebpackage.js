module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('validateManifestWebPackage', 'validate webpackage manifest',function() {
        var WebpackageDocumentValidator = require('webpackage-document-api');
        var validator = new WebpackageDocumentValidator();
        try {
            var _webPackageDoc = grunt.config.get('manifestWebpackage');
            console.log('WebPackage name:', _webPackageDoc.name);
            validator.validateWebpackageManifest(_webPackageDoc);
        } catch (myError) {
            for (var i = 0; i < myError.tv4errors.length; i++) {
                delete myError.tv4errors[i].code;
                delete myError.tv4errors[i].subErrors;
                delete myError.tv4errors[i].stack;
            }
            console.log('Schema validation failed: ', myError.tv4errors);
            grunt.fail.error(myError);
        }
    });
};
