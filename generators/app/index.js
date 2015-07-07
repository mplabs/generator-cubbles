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
            '\n$ yo cubixx:webapp (for a Cubixx WebApplication)'+
            '\n$ yo cubixx:compound (for a Compound Cubixx Component)'+
            '\n$ yo cubixx:elementary (for a Elementary Cubixx Component)'+
            '\n$ yo cubixx:webutil (\'webutil\' is also known as \'webresource\')'
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
