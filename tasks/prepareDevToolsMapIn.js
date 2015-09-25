/**
 * This prepares the current project to map-in the devTools from it's source repository.
 */
var sh = require('shelljs');
var fs = require('fs');

module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('prepareDevTools-mapIn', 'prepare to map in \'devTools\' from git', function() {
        // check if git is installed
        if (!sh.which('git')) {
            sh.echo('Sorry, this feature requires git');
            return;
        }

        // check, if project is under git source control
        if (sh.exec('git status').code == 0) {
            sh.echo('Your projects needs to be under git source-control.');
            return;
        }

        // install git-subtree globally to have it available on project-level
        var command_install_gitsubtree = 'npm install -g git-subtree@0.1.3';
        console.log('Running ' + command_install_gitsubtree);
        sh.exec(command_install_gitsubtree);

        // write config for git-subtree command
        var filename = '../../subtrees.json';
        var subtreeConfig = {
            "devtools": {
                "localFolder": 'devtools-mappedIn',
                "repository": 'https://pmt.incowia.de/webble/r/client/cubixx-coder-devtools.git',
                "branch": "master"
            }
        };
        //
        fs.writeFile(filename, JSON.stringify(subtreeConfig, null, 4), function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log('SubtreeConfig saved to ' + filename);
            }
        });

    });
};
