/*global module require*/
/**
 * SM 20Sep12: Export manifest file to <script> elements.
 * TODO Support CSS manifests too.
 */

 module.exports = function (grunt) {

    var _ = require('underscore');

    grunt.registerMultiTask('exportManifests', 'Export multiple manifest files to HTML elements or jsp.', function () {

        var startMillis = Date.now();

        grunt.log.writeln("Exporting manifests to " + this.data.dest + " using template: " + this.data.template);

        //is there's another way to import config ?
        var gruntConfig = grunt.config('values');

        // HTML output array.
        var out = [];

        // Load the template into a string, ready for use.
        var scriptTpl = grunt.file.read(gruntConfig.config.path.tmpl + this.data.template);

        // Iterate over each manifest entry, pulling the files from each manifest and rendering in order defined.

            // Parse the manifest and load the array of files defined.
            var files = gruntConfig.manifestLoader.readManifest(this.data.src);
            
            _.each(files, function (file) {  

                out.push(grunt.template.process(scriptTpl, {
                    filePath: file
            }));

            out.push("");
        });

        // console.log(out); // Debug

        // Write array to desk
        grunt.file.write(this.data.dest, out.join("\n"));

        var finishTime = Date.now() - startMillis;
        var millisTotalDisplay = "" + finishTime + "ms";
        grunt.log.writeln("Time taken: " + millisTotalDisplay);

    });


 };