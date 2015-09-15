module.exports = function(grunt) {
    'use strict';
    grunt.registerMultiTask('find-in-json', 'webpackage-devtemplate!', function() {
        var pattern = this.options().pattern;
        var attributes = this.options().attributes;
        var objAttributes = [];
        if (typeof attributes === 'string') {
            objAttributes.push(attributes);
        } else {
            objAttributes = attributes;
        }

        function resolve(cur, ns) {

            var undef;

            ns = ns.split('.');

            while (cur && ns[0]) {
                cur = cur[ns.shift()] || undef;
            }

            return cur;

        }

        this.filesSrc.map(function(filepath) {
            if (!grunt.file.exists(filepath)) {
                return;
            }

            var json = grunt.file.readJSON(filepath);

            objAttributes.forEach(function(item) {

                var attr = resolve(json, item);
                if (attr) {
                    var regex = new RegExp('.+' + pattern + '.+', 'gm');
                    var erg = attr.match(regex);
                    if (erg && erg.length > 0) {
                        grunt.fail.warn('The file ' + filepath + ' in attribute ' + attributes +
                            ' contains the string \'' + pattern + '\': ' + erg[0]);

                    }
                }

            });

        });

    });

};
