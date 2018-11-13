module.exports=function(grunt){
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      },
      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['/source/styles/partials/_fonts.scss','/source/styles/partials/_colors'],
          dest: 'styles.scss',
        },
      },
    }
  });  
  grunt.loadNpmTasks('grunt-contrib-concat');
  
}