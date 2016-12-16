var path = require('path');

module.exports = function(eyeglass, css) {
  return {
    sassDir: path.join(__dirname, 'assets/css')
  }
};
