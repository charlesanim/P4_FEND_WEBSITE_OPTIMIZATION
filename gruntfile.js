module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // 1) First look for problems in the code
        
        // lint javascript (validate and detect errors) 
        jshint: {
	       all: {
               options: {
                   force: true
               },
               src: ['Gruntfile.js', 'test/js/*.js', 'test/views/js/*.js']
           }
        },        
        // lint css (validate and detect errors)
        csslint: {            
            lax: {
                options: {
                    import: false
                },
                src: ['test/css/*.css', 'test/views/css/*css']
            }
        },        
        // lint html (validate and detect errors)
        htmllint: {
            all: {
                options: {
                    force: true
                },
                src: ['test/*.html', 'test/views/*.html']
            }
        },
        
        // 2) Then copy all the content in a /dist/ folder, which will be the final production code
        
        // clean and create the folder for the production code
        clean: {
            dev: {
                src: ['dist/'],
            },
        },
        mkdir: {
            dev: {
                options: {
                    create: ['dist/']
                },
            },
        },
        // copy the files in the /dist/ folder just created
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'test/', src: ['**'], dest: 'dist/'}
                ],
            },
        },
        
        // 3) We optimize the code from the /dist/ folder: minify javascript and css, and optimize images
        
        // minify javascript
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'dist/js',
                    src: ['*.js'],
                    dest: 'dist/js'
                },{
                    expand: true,
                    cwd: 'dist/views/js',
                    src: ['*.js'],
                    dest: 'dist/views/js'
                }]
            }
        },             
        // minify css
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css'],
                    dest: 'dist/css',
                    ext: '.css'
                },{
                    expand: true,
                    cwd: 'dist/views/css',
                    src: ['*.css'],
                    dest: 'dist/views/css',
                    ext: '.css'
                }]
            }
        },
        
        // resize images from pizza
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width: 77,
                        quality: 60
                    },{
                        width: 116,
                        quality: 60
                    },{
                        width: 232,
                        quality: 60
                    },{
                        width: 720,
                        quality: 60
                    }]
                },
                files: [{
                    expand: true,
                    src: ['**.{gif,jpg,png}'],
                    cwd: 'dist/views/images/',
                    dest: 'dist/views/images/'
                }]
            }
        }
    });
    
    // Where we tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default', [
        'jshint',
        'csslint',
        'htmllint',
        'clean',
        'mkdir',
        'copy',
        'uglify',
        'cssmin',
        'responsive_images'
    ]);
};
