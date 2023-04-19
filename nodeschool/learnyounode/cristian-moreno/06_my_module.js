const fs = require('fs');
const path = require('path');

/**
 * Read a directory and filter by extension
 * @param {string} dir Directory to read
 * @param {string} ext Extension to filter
 * @param {Function} callback Callback function
 */
function readMyDir(dir, ext, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);

    const filteredFiles = files.filter((file) => {
      return path.extname(file) === `.${ext}`;
    });

    // callback sin error
    callback(null, filteredFiles);
  });
}

module.exports = readMyDir;
