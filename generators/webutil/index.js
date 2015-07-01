'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

    initializing: function() {
        this.appname = this.appname.toLowerCase().replace(/\s+/g, '-');
        this.config.defaults({
            webPackageType: 'webresource'
        })
    },
    constructor: function() {
        yeoman.generators.Base.apply(this, arguments);
        //   // This makes `appname` a required argument.
        //   // this.argument('appname', {
        //   //   type: String,
        //   //   required: true
        //   // });
        //   // And you can then access it later on this way; e.g. CamelCased
        //   // this.appname = this._.camelize(this.appname);
        //
        //   console.log(this.appname);
    },

    prompting: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the neat ' + chalk.red('Cubixx WebPackage') +
            ' generator!'
        ));

        var prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'WebPackage Name?',
                default: this.appname
            }, {
                type: 'input',
                name: 'groupId',
                message: 'Group Id?',
                default: 'org.example'
            }, {
                type: 'input',
                name: 'webPackageDescription',
                message: 'Description?'
            }, {
                type: 'input',
                name: 'webPackageAuthorName',
                message: 'WebPackage Author\'s Name?',
                store: true
            }, {
                type: 'input',
                name: 'webPackageAuthorEMail',
                message: 'WebPackage Author\'s Email?',
                store: true
            }, {
                type: 'input',
                name: 'webPackageAuthorUrl',
                message: 'WebPackage Author\'s Url?',
                default: 'none'
            }
        ];

        this.prompt(prompts, function(props) {
            this.props = props;
            this.props.webPackageType = this.config.get('webPackageType');
            // To access props later use this.props.someOption;
            //this.log(props);
            done();
        }.bind(this));
    },

    configuring: {
        manifestWebPackage: function() {
            var author = {
                name: this.props.webPackageAuthorName
            };
            this.props.webPackageAuthorEMail ? (author.email = this.props.webPackageAuthorEMail) : null;
            (this.props.webPackageAuthorUrl && this.props.webPackageAuthorUrl != 'none') ?
            (author.url = this.props.webPackageAuthorUrl) : null;
            // add this to the props to make it available for the template processing
            this.props.webpackageAuthors = JSON.stringify([author])
        },

        projectfiles: function() {
            // this.fs.copy(
            //   this.templatePath('.editorconfig'),
            //   this.destinationPath('.editorconfig')
            // );
            // this.fs.copy(
            //   this.templatePath('.jshintrc'),
            //   this.destinationPath('.jshintrc')
            // );
        }
    },

    writing: {

        webutil: function() {
            this.fs.copyTpl(
                this.templatePath('public/_manifest.webpackage'),
                this.destinationPath('public/manifest.webpackage'),
                this.props
            );
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'), {
                    name: this.props.name
                }
            );
            this.fs.copyTpl(
                this.templatePath('_README.md'),
                this.destinationPath('README.md'),
                this.props
            );
            /** Now copy all the other stuff.
             * @see https://github.com/isaacs/node-glob#options
             */
            this.fs.copy(
                this.templatePath('./**/*'),
                this.destinationRoot(), {
                    globOptions: {
                        dot: true,
                        ignore: ['**/_**', '**/git-template/**']
                    }
                }
            );
        }
    },

    install: function() {
        this.npmInstall();
    },

    end: function() {
        this.log(yosay(
            'Done'
        ));
        this.log(
            'Next:\n' +
            '1) Put your resources into the \'public/resources\' -folder\n' +
            '2) Update the \'dependency.json\' with\n' +
            '   * the local resources and\n' +
            '   * (optionally) dependencies to other webpackages.\n' +
            '3) Review the \'webpackage.manifest\' especially \n' +
            '   * the \'version\' \n' +
            '\n' +
            'FINALLY: Run \'grunt deployLocal\' or \'grunt deployIntegration\'  to deploy the webpackage into the Cubixx-Base of your choice.' +
            '\n' +
            'Note: type \'grunt\' to list all available grunt tasks '
        );
    }
});
