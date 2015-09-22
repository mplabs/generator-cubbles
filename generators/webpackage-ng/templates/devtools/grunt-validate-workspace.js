'use strict';
var fs = require('fs');

module.exports = function(grunt) {
    var workspacePath = '../workspace/';
    var workspaceConfigFile = workspacePath + '.workspace';
    if (!grunt.file.isFile(workspaceConfigFile)) {
        grunt.fail.error('Expected file \'' + workspaceConfigFile +
            '\' to be found. We recommend to use the generator to scaffold a valid project-structure.');
    }
    /*
     * read workspaceConfigFile -file and validate content
     */
    var workspaceConfig = grunt.file.readJSON(workspaceConfigFile);
    //var activeWP = workspaceConfig.activeWebPackage;
    if(('activeWebPackage' in workspaceConfig) && typeof workspaceConfig.activeWebPackage === 'string' && workspaceConfig.activeWebPackage.length > 0) {
        grunt.log.subhead('Currently active WebPackage: ' + workspaceConfig.activeWebPackage + ' (@see ' + workspaceConfigFile + ')');
    } else {
        grunt.fail.warn('Currently there is NO active WebPackage configured. Please check \'' + workspaceConfigFile + '\'');
    }

    var activeWebPackage = workspaceConfig.activeWebPackage;
    // does the mapped folder exist?
    if (!grunt.file.isDir(workspacePath + activeWebPackage)) {
        grunt.fail.warn('Mapped folder does NOT exist. Please check \'' + workspaceConfigFile + '\'');
    }
    // does the manifest.webpackage file has corresponding values for groupId and name?
    var manifest = grunt.file.readJSON(workspacePath + activeWebPackage + '/manifest.webpackage')
    var webpackageCommonName = manifest.groupId + '.' + manifest.name;
    if (activeWebPackage != webpackageCommonName) {
        grunt.log.error('Expected the folder to be named \'' + webpackageCommonName + '\'. Running a fix ...');
        // rename the folder
        fs.renameSync(workspacePath + activeWebPackage, workspacePath + webpackageCommonName, function(err) {
            if (err) {
                grunt.log.error();
                grunt.verbose.error();
                grunt.fail.warn('Fix operation failed. Please do update the folder name to \'' + webpackageCommonName +
                    '\' manually.');
            }
        });
        // update .workspace file to point to the new folder name
        workspaceConfig.activeWebPackage = webpackageCommonName;
        grunt.file.write(workspaceConfigFile, JSON.stringify(workspaceConfig, null, 2));
        grunt.log.error('Fixed.');
    }

};
