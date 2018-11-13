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
      }
    }
  });
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
