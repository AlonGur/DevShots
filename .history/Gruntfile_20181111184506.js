module.exports=function(grunt){
  
  grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.initConfig({
      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['/source/styles/partials/*.scss'],
          dest: '/source/styles/styles.scss',
        },
      },
  });
}
