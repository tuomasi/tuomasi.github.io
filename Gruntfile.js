module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      global: {
        files: {
          "js/site.min.js": ["js/site.js"]
        }
      }
    },

    sass: {
      global: {
        options: {
          style: "compressed",
          noCache: true
        },
        files: {
          "css/global-unprefixed.css": "scss/global.scss"
        }
      }
    },

    autoprefixer: {
      global: {
        src: "css/global-unprefixed.css",
        dest: "css/global.css"
      }
    },

    shell: {
      jekyllServe: {
        command: "jekyll serve --baseurl="
      },
      jekyllBuild: {
        command: "jekyll build --config _config.yml"
      }
    },

    watch: {
      options: {
        livereload: true
      },
      site: {
        files: ["*.html", "_layouts/*.html", "_posts/*.html", "_portfolio/*.html", "_includes/*.html"],
        tasks: ["shell:jekyllBuild"]
      },
      js: {
        files: ["js/*.js"],
        tasks: ["uglify", "shell:jekyllBuild"]
      },
      css: {
        files: ["scss/*.scss"],
        tasks: ["sass", "autoprefixer", "shell:jekyllBuild"]
      }
    },
  });

 require("load-grunt-tasks")(grunt);

  // Default task(s).
  grunt.registerTask("default", ["sass", "autoprefixer", "shell:jekyllBuild", "watch"]);

};
