module.exports=function(grunt){
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['source/styles/fonts.scss','source/styles/colors.scss'],
        dest: 'source/styles/partials/test.scss',
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      },   
    },
    
  });  
  
  
}
