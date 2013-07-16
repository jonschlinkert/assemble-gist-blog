/*
 * assemble-gist-blog
 * https://github.com/assemble/assemble-gist-blog
 * Copyright (c) 2013
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    assemble: {
      options: {
        flatten: true,
        assets: 'assets',
        layout: 'src/layouts/default.hbs',
        data: 'src/data/*.{json,yml}'
      },
      blog: {
        files: {
          './': ['src/*.hbs']
        }
      }
    },

    less: {
      options: {
        paths:   'vendor/bootstrap/less',
        imports: {
          less: ['mixins.less', 'variables.less']
        }
      },
      bootstrap: {
        src:  ['vendor/bootstrap/less/bootstrap.less', 'src/gist-overrides.less'],
        dest: 'assets/bootstrap.css'
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      example: ['*.html']
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default tasks to be run.
  grunt.registerTask('default', ['clean', 'assemble']);
};

