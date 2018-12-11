'use strict';
/* eslint-env node, es6 */

const path = require('path');
const buildInfo = require('../broccoli/build-info');

console.log(buildInfo.buildGitInfo(path.resolve(__dirname, '..')));
