'use strict';

module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('jit-grunt')(grunt);

  grunt.initConfig({
      sass:{
        dist: {
          files:{
            'css/styles.css': 'css/styles.scss'
          }
        }
      },
      watch: {
        files: 'css/*.scss',
        tasks: ['saas']
      },
      browserSync: {
        dev:{
          bsFiles: {
            src:[
              'css/*.scss',
              '*.html',
              'js/*.js'
            ]
          },
          options: {
            watchTask: true,
            server:{
              baseDir: './'
            }
          }
        }
      }

  });

  grunt.registerTask('css', ['saas']);
  grunt.registerTask('default', ['browserSync', 'watch']);
};
