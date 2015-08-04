'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

    initializing: function() {
        this.appname = this.appname.toLowerCase().replace(/\s+/g, '-');
        /**
         * regex definitions for input validation (note: use http://regexpal.com/ for testing)
         */
        this.webpackagename_regex = /^([a-z0-9]+)([-\.a-z0-9]*)([a-z0-9])+$/;
        this.groupid_regex = /^([a-z0-9-_]+)(\.[a-z0-9-_]+)*$/;
        this.peopleName_regex = /^(([A-Za-zäöüÄÖÜ]+[\-\']?)*([A-Za-zäöüÄÖÜ]+)?\s)+([A-Za-zäöüÄÖÜ]+[\-\']?)*([A-Za-zäöüÄÖÜ]+)?$/;
        // for the url-regex @see https://mathiasbynens.be/demo/url-regex
        this.url_regexByStephanhay = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        this.email_regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        //
        this.config.defaults({
            webPackageType: 'webutil'
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
                default: this.appname,
                validate: function(input) {
                if (!this.webpackagename_regex.test(input)) {
                    return "Please provide a value with a valid pattern (" + this.webpackagename_regex + ").";
                }
                return true;
            }.bind(this)
            }, {
                type: 'input',
                name: 'groupId',
                message: 'Group Id?',
                default: 'org.example',
                validate: function(input) {
                    if (!this.groupid_regex.test(input)) {
                        return "Please provide a value with a valid pattern (" + this.groupid_regex + ").";
                    }
                    return true;
                }.bind(this)
            }, {
                type: 'input',
                name: 'webPackageDescription',
                message: 'Description?'
            }, {
                type: 'input',
                name: 'webPackageAuthorName',
                message: 'WebPackage Author\'s Name?',
                store: true,
                validate: function(input) {
                    if (!this.peopleName_regex.test(input)) {
                        return "Please provide a value with a valid pattern (" + this.peopleName_regex + ").";
                    }
                    return true;
                }.bind(this)
            }, {
                type: 'input',
                name: 'webPackageAuthorEMail',
                message: 'WebPackage Author\'s Email?',
                store: true,
                validate: function(input) {
                    if (!this.email_regex.test(input)) {
                        return "Please provide a value with a valid pattern (" + this.email_regex + ").";
                    }
                    return true;
                }.bind(this)
            }, {
                type: 'input',
                name: 'webPackageAuthorUrl',
                message: 'WebPackage Author\'s Url?',
                default: 'none',
                validate: function(input) {
                    if (input != 'none' && !this.url_regexByStephanhay.test(input)) {
                        return "Please provide a value with a valid pattern (" + this.url_regexByStephanhay + ").";
                    }
                    return true;
                }.bind(this)
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
            this.fs.copyTpl(
                this.templatePath('_.gitignore'),
                this.destinationPath('.gitignore'),
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
                        ignore: ['**/_**']
                    }
                }
            );
        }
    },

    install: function() {
        this.log('\nRunning npm install ...');
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
