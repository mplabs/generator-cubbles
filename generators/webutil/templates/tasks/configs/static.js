/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
    manifest: {
        generate: {
            options: {
                basePath: './<%= param.dst %>/',
                // cache: ['js/server.js', 'css/style.css'],
                // cachePrefix: '/',
                network: ['*'],
                //fallback: ['/ fallback.html'],
                //exclude: ['js/jquery.min.js'],
                preferOnline: true,
                verbose: false,
                timestamp: true
            },
            src: [
                '*.html',
                'js/*.js',
                'style/*.css',
                'style/images/*.png',
                'style/images/*.jpg',
                'style/icons/*.ico',
                'style/icons/*.png',
                'locales/manifest.json',
                'locales/*.l20n',
                'vendor/**'
            ],
            dest: '<%= param.dst %>/manifest.appcache'
        }
    },
    copy: {
        appcache: {
            files: [{
                expand: false,
                src: '<%= param.build %>/manifest.appcache',
                dest: '<%= param.dst %>/manifest.appcache'
            }]
        }
    },

    // client side test
    mocha_phantomjs: {
        all: ['<%= param.src %>/test/index.html']
    },

    'json-replace': {
        'manifest.webapp': {
            options: {
                replace: {
                    name: '<%= param.name %>',
                    version: '<%= param.version %>',
                    description: '<%= param.description %>'
                }
            },
            files: [{
                src: '<%= param.build %>/manifest.webapp',
                dest: '<%= param.dst %>/manifest.webapp'
            }]
        },
        'manifest.webpackage': {
            files: [{
                src: '<%= param.src %>/manifest.webpackage',
                dest: '<%= param.src %>/manifest.webpackage'
            }]
        }
    },
    'modify_json': {
        'manifest.webpackage': {
            options: {
                add: true,
                fields: {
                    webpackageId: ''
                }

            },
            files: [
                {
                    src: '<%= param.src %>/manifest.webpackage',
                    dest: '<%= param.src %>/manifest.webpackage'
                }]
        }
    },
    'package-param': {
        file: '<%= param.build %>/manifest.webpackage'
    }
};
