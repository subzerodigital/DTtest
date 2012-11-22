/*global exports require*/
/**
 * Helper function for reading manifest files.
 *
 * SM 14Sep12: Loaded as a node module.
 *
 * @author Pascal Zajac
 * @author Scott Maclure
 * @param {String} manifest The path to the manifest to read.
 * @param {String} pathPrefix A prefix to append to each file read.
 * @returns {Array} An array of paths representing the files in the manifest.
 */
exports.readManifest = function(manifest, pathPrefix) {

    var files = [];

    // Default to empty string
    pathPrefix = pathPrefix || '';

    // node.js FileSystem library
    var fs = require('fs');

    var array = fs.readFileSync(manifest).toString().split("\n");

    for (var i = 0; i < array.length; i++) {

        var file = array[i];

        if (file.trim() !== "" && file.match(/^#/) === null) {

            // Append the "base path" for static assets, relative to this grunt.js file.
            files.push(pathPrefix + file);
        }

    }

    // console.log("Parsed manifest files for " + manifest + ":");
    // console.log(files);

    return files;
};