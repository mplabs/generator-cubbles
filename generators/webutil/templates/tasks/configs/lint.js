/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
    jshint: {
        utils: {
            jshintrc: true,
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
        }

    },
    jsonlint: {
        files: {
            src: [
                'package.json',
                'bower.json',
                '<%= param.src %>/manifest.webpackage',
            ]
        }
    },
    githooks: {
        all: {
            'pre-commit': 'lint'
        }
    }
};
