/*
	Kyle Bergman
	INFO 343 with Morris
	Grunt assignment
*/


module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), 
		uglify: {
  			options: {
    			// the banner is inserted at the top of the output
    			banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
  			},
  			dist: {
    			files: {
      			'dist/<%= pkg.name %>.min.js': ['<%= pkg.name %>.js']
    			}
  			}
		},
		jshint: {
  			// define the files to lint
  			files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
  			// configure JSHint (documented at http://www.jshint.com/docs/)
  			options: {
     			// more options here if you want to override JSHint defaults
    			globals: {
      				jQuery: true,
      				console: true,
      				module: true
    			}
  			}
		},
		cssmin: {
  			minify: {
    			expand: true,
    			src: ['toolbox-challenge.css'],
    			dest: 'dist/',
    			ext: '.min.css'
  			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
};