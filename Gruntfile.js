'use strict';
module.exports = function(grunt) {
  // loadNpmTasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');

  // initConfig
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      src: ['*.js','lib/*.js', 'test/*.js'],
      options: {
        jshintrc: true
      },
      all: ['Gruntfile.js', 'server.js', 'test/api/*.js','app/js/**/*.js']
    },
    jscs: {
      src: '*.js',
      options: {
          config: '.jscsrc',
          requireCurlyBraces: [ 'if' ]
      }
    },
    simplemocha: {
      all: { src: ['test/bst-test.js'] }
    },
    shell: {
      mongodb: {
        command: 'mongod --dbpath ./db',
        options: {
          async: true,
          stdout: false,
          stderr: true,
          failOnError: true,
          execOptions: {
            cwd: '.'
          }
        }
      }
    },
  });

  // registerTask list
  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
  grunt.registerTask('default', ['test']);
};
