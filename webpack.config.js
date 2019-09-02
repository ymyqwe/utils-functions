var path = require('path');
// var webpack = require('wepback');
const fs = require('fs');
const srcPaths = fs.readdirSync('src');
// console.log('paths', srcPaths);

const generateOutput = (paths = []) =>
  paths.map((item) => {
    const fileName = item.replace(/\.js/, '');
    return {
      entry: `./src/${fileName}`,
      mode: 'production',
      output: {
        path: path.join(__dirname, 'lib'),
        filename: item
      }
    };
  });

// console.log('generate', generateOutput(srcPaths));
module.exports = generateOutput(srcPaths);
