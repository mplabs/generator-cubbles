/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
    jshint: { // exclude list defined in .jshintignore
        utils: {
            options: {
                jshintrc: true
            },
            src: [
                '*.js',
                'tasks/**/*.js'
            ]
        },
        client: {
            options: {
                jshintrc: true
            },
            src: [
                '<%= param.src %>/**/*.js'
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
                'upload-config.json',
                '<%= param.src %>/manifest.webapp',
                '<%= param.src %>/manifest.webpackage',
                '<%= param.src %>/manifest.component',
                '<%= param.src %>/manifest.cubx',
                '<%= param.src %>/**/*.json'
            ]
        }
    },
    csslint: {
        options: {
            csslintrc: '.csslintrc'
        },
        strict: { // attach exclude file with prefix '!', ex: ![path]/main.css
            src: ['webpackage/**/*.css', '!webpackage/**/vendor/**']
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
