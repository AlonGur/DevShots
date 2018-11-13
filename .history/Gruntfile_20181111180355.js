module.exports=function(grunt){
  grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.initConfig({
      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
          dest: 'dist/built.js',
        },
      },
  
    
    
  });
}
