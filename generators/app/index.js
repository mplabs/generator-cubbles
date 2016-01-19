'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

    prompting: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the neat ' + chalk.red('Cubbles WebPackage-Project-Generator') +
             '\nType' + '\n$ yo cubixx:project' + '\n to create a new cubixx-project.'
        ));
        done();
    },

    configuring: {},

    writing: {},

    install: function() {
        //this.installDependencies();
    },
    end: function() {
    }
})
;
