module.exports=function(grunt){
  grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.initConfig({
      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['/source/styles/partials/_fonts.scss','.source/styles/partials/_colors.scss'],
          dest: '/source/styles/styles.scss',
        },
      },
  
    
    
  });
}
