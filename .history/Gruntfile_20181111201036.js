module.exports=function(grunt){
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['../source/styles/partials/_fonts.scss','../source/styles/partials/_colors'],
        dest: 'styles.scss',
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
