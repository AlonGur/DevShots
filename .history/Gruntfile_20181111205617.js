module.exports=function(grunt){
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: '; \n ',
      },
      dist: {
        src: ['source/styles/partials/variables/importVariables.scss','source/styles/partials/*.scss'],
        dest: 'myStyles.scss',
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
