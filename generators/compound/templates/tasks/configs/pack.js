/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
    copy: {
        backgroundJs: {
            files: [
                {
                    expand: true,
                    cwd: '<%= param.src %>/',
                    src: 'js/background.js',
                    dest: '<%= param.dst %>/'
                }]
        },
        installPage: {
            files: [
                {
                    expand: true,
                    cwd: 'helper/',
                    src: 'install.html',
                    dest: '<%= param.pack %>/'
                }]
        }
    },
    clean: {
        pack: ['<%= param.dst %>/test']
    },
    fileExists: {
        pack: [
            '<%= param.dst %>/manifest.webpackage',
            '<%= param.dst %>/manifest.cubx',
            '<%= param.dst %>/dependency.json',
            '<%= param.dst %>/manifest.component',
            '<%= param.dst %>/style/app.min.css'
        ]
    },
    'string-replace': {
        crc_url: {
            files: [
                {
                    expand: true,
                    cwd: '<%= param.dst %>/',
                    src: 'index.html',
                    dest: '<%= param.dst %>/'
                }],
            options: {
                replacements: [
                    {
                        //if developed directly against database (deprecated)
                        //e.g. http://boot2docker.me:5984/webpackage-store/cubx.core.crc-loader...
                        pattern: /(https?:\/\/[\w\.\-]*:\d{0,4}\/[\w\d\.\-]*\/)(cubx.core.crc-loader)/ig,
                        replacement: '../$2'
                    },
                    {
                        //if developed against the gateway (recommended)
                        //e.g. http://boot2docker.me/cubx.core.crc-loader...
                        pattern: /(https?:\/\/[\w\.\-]*\/)(cubx.core.crc-loader)/ig,
                        replacement: '/$2'
                    }]
            }
        }
    }
};
