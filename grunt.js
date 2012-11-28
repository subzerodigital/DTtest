/*global module:false*/
module.exports = function(grunt) {
	
 "use strict";
 
 var manifestLoader = require('./dev/grunt/manifestLoader.js');
 var config = grunt.file.readJSON('./dev/grunt/gruntConfig.js');
 
 //Load custom tasks eg. export manifest
 grunt.loadTasks("./dev/grunt/tasks");

  // Project configuration.
  grunt.initConfig({
	  
	//make config and manifestLoader available to custom tasks
	values:{
		config:config,
		manifestLoader:manifestLoader
	},
	
	min: {
		    dist: {
		      src: manifestLoader.readManifest('./dev/manifests/all-js'),
		      dest: 'jsmin/app.js'
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
    uglify: {
    	
    },
    
    exportManifests : {
        ocaJs : {
            src : config.manifests.js.all.src,
            dest: "./dev/fragment/js.jsp",
            template: 'script.template.html'
        }
     
    }
    
  });

  // Default task.
  //grunt.registerTask('default', 'lint qunit concat min');
 
 grunt.registerTask('default', 'min exportManifests');

};
