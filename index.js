'use strict';

module.exports = function build(name, repo, opts, cb) {
  let callback;
  let options;

  if (!cb && typeof opts === 'function') {
    callback = opts;
    options  = {};
  } else {
    callback = cb;
    options  = opts;
  }

  options.t = name;
  options.remote = repo;
  options.pull = options.pull || true;

  module.exports._docker().buildImage(null, options, callback);
};

module.exports.docker = null;

module.exports._docker = function docker() {
  if (!module.exports.docker) {
    const Docker = require('dockerode');
    module.exports.docker = new Docker();
  }

  return module.exports.docker;
};
