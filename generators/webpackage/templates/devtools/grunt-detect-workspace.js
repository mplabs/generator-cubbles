'use strict';
var fs = require('fs');

module.exports = function(grunt) {
    var workspacePath = '../workspace/';
    var alternativeWorkspacePath = './workspace/';

    if (grunt.file.isDir(workspacePath)) {
        return workspacePath;
    } else if (grunt.file.isDir(alternativeWorkspacePath)) {
        return alternativeWorkspacePath;
    } else {
        grunt.fail.fatal('Workspace \'' + workspacePath + '\' not found.');
    }
};
