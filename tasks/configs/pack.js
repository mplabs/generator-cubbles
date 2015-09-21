/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {

    clean: {
        options: {force: true},
        pack: ['<%= param.dst %>/']
    },

    copy: {
        build: {
            files: [
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= param.src %>',
                    dest: '<%= param.build %>',
                    src: ['**']
                }]
        },
        dist: {
            files: [
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= param.src %>',
                    dest: '<%= param.dst %>',
                    src: ['**']
                }]
        }
    }
};
