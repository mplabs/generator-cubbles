/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
    jshint: {  // exclude list defined in .jshintignore
        utils: {
            options: {
                jshintrc: true
            },
            src: [
                '*.js',
                'tasks/**/*.js'
            ]
        }
    },
    jscs: { // exclude list defined in .jscsrc
        options: {
            config: '.jscsrc'
        },
        utils: {
            src: [
                '*.js',
                'tasks/**/*.js'
            ]
        },
        client: {
            src: [
                '<%= param.src %>/**/*.js'
            ]
        }

    },
    jsonlint: {
        files: {
            src: [
                'package.json',
                'bower.json',
                '<%= param.src %>/manifest.webpackage'
            ]
        }
    },
    csslint: {
        options: {
            csslintrc: '.csslintrc'
        },
        strict: { // attach exclude file with prefix '!', ex: ![path]/main.css
            src: ['public/**/*.css', '!public/**/vendor/**/*.css']
        }
    },
    sloc: {
        client: {
            files: {
                './': [
                    '<%= param.src %>/*.html',
                    '<%= param.src %>/js/*.js',
                    '<%= param.src %>/style/*.css',
                    '<%= param.src %>/test/unit/*.js'
                ]
            }
        }
    },
    githooks: {
        all: {
            'pre-commit': 'validateSources'
        }
    }
};
