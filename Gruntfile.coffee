module.exports = (grunt) ->
  
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")
    currentBuild: null
    browserify:
      basic:
        src: ["./amf-serializer.js"]
        dest: "lib/amf-serializer.js"
        options:
          external: ["composite-detect","three","jszip","q"]
          alias: ["./amf-serializer.js:amf-serializer"]
    bump:
      options:
        files: ['package.json','bower.json']
        updateConfigs: []
        commit: true
        commitMessage: 'Release of v%VERSION%'
        commitFiles: ['package.json','bower.json'] # '-a' for all files
        createTag: true
        tagName: '%VERSION%'
        tagMessage: 'Version %VERSION%'
        push: false
        pushTo: 'upstream'
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' #options to use with '$ git describe'   

  grunt.loadNpmTasks "grunt-browserify"
  grunt.loadNpmTasks "grunt-bump"
  
  # Task(s).
  grunt.registerTask "build-browser-lib", ["browserify"]
