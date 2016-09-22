module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	
    browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'app/css/*.css',
                        'app/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app'
                }
            }
        }

  });

  // Load the plugins tasks 
  
  grunt.loadNpmTasks('grunt-browser-sync');
  
  // Default task(s).
  grunt.registerTask('default', ['browserSync']);
};