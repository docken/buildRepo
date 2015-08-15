# @docken/buildRepo

[![Build status](https://img.shields.io/wercker/ci/undefined.svg "Build status")](https://app.wercker.com/project/bykey/undefined)
[![NPM downloads](https://img.shields.io/npm/dm/@docken/buildRepo.svg "NPM downloads")](https://www.npmjs.com/package/@docken/buildRepo)
[![NPM version](https://img.shields.io/npm/v/@docken/buildRepo.svg "NPM version")](https://www.npmjs.com/package/@docken/buildRepo)
[![Node version](https://img.shields.io/node/v/@docken/buildRepo.svg "Node version")](https://www.npmjs.com/package/@docken/buildRepo)
[![Dependency status](https://img.shields.io/david/docken/buildRepo.svg "Dependency status")](https://david-dm.org/docken/buildRepo)

Build a Docker Image from a git repository.

## Requirements

* io.js >=v1.0.0
* Node.JS >=v4.0.0
* Docker >=v1.8.0

## Install

```sh
$ npm install @docken/buildRepo --save
```

## Usage

```js
const buildRepo = require('@docken/buildRepo');
```

### Build

Build the official [hello-world](https://github.com/docker-library/hello-world)
Docker Image.

```js
const name = 'docker-library/hello-world';
const repo = 'https://github.com/docker-library/hello-world.git';

buildRepo(name, repo, function(err, res) {
  if (err) { throw err; }

  res.on('data', function(data) {
    console.log(data.toString());
  });
});
```

### Configure

This is optional; but if you want to use your own
[dockerode](https://github.com/apocas/dockerode) client you can do that.

```js
buildRepo.docker = myDockerodeClient;
```

## [MIT License](https://github.com/docken/buildRepo/blob/master/LICENSE)
