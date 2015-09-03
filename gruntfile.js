/*
 * grunt-nodocs
 *
 *
 * Copyright (c) 2015 The NoInfoPath Group, llc.
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    notemplates: {
        test: {
            options: {
                src: 'test/checkbox.html',
                dest: 'dist/templates.js',
                className: "NoComponentTemplate"
            }
        }
    },
    bumpup: {
      file: 'package.json'
    },
    version: {
      options: {
        prefix: '@version\\s*'
      },
      defaults: {
        src: ['tasks/notemplates.js']
      }
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-version');

  grunt.registerTask('build', ['bumpup', 'version']);
};
