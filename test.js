/* eslint no-console: 0, func-names: 0 */
'use strict';

const assert = require('assert');
const buildRepo = require('./');

beforeEach(function() {
  buildRepo.docker = null;
});

describe('@docken/buildRepo', function() {
  describe('_docker()', function() {
    it('returns new Docker client if none is defined');
    it('returns existing Docker client if one is defined');
  });

  describe('buildRepo()', function() {
    it('builds valid GitHub repository', function(done) {
      this.timeout(10000);

      const name = 'docker-library/hello-world';
      const repo = 'https://github.com/docker-library/hello-world.git';

      buildRepo(name, repo, function(err, res) {
        assert.ifError(err);

        res.on('data', function(data) {
          console.log(data.toString());
        });

        res.on('end', done);
        res.on('error', assert.ifError);
      });
    });
  });
});
