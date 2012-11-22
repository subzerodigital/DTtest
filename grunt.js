/*global module:false*/
module.exports = function(grunt) {
	
 "use strict";
 
 var manifestLoader = require('./dev/grunt/menifestLoader.js');
 var config = grunt.file.readJSON('./dev/grunt/gruntConfig.js')

  // Project configuration.
  grunt.initConfig({
	
	min: {
		    dist: {
		      src: manifestLoader.readManifest('./dev/menifests/all-js'),
		      dest: 'jsmin/built.min.js'
		 }
	},
	
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });

  // Default task.
  //grunt.registerTask('default', 'lint qunit concat min');
 
 grunt.registerTask('default', 'min');

};
