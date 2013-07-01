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
      pages: {
        options: {
          flatten: true,
          assets: 'dest/assets',
          layout: 'src/templates/layouts/default.hbs',
          data: 'src/data/*.{json,yml}',
          partials: 'src/templates/partials/*.hbs'
        },
        files: {
          './': ['src/templates/pages/*.hbs']
        }
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
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default tasks to be run.
  grunt.registerTask('default', ['clean', 'assemble']);
};

