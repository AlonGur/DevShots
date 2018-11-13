module.exports=function(grunt){
  grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.initConfig({
      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['/source/styles/partials/*.*',],
          dest: '/source/styles/.js',
        },
      },
  
    
    
  });
}
