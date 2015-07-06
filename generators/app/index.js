'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

    prompting: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the neat ' + chalk.red('Cubixx WebPackage') +
            ' generator!' + '\n' + 'Please specify the type of webpackage you\'d like to create:' +
            '\nyo cubixx:compound (for a Compound Cubixx Component)'+
            '\nyo cubixx:elementary (for a Elementary Cubixx Component)'+
            '\nyo cubixx:webutil (\'webutil\' is also known as \'webresource\')'
        ));
        done;
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
