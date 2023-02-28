#!/usr/bin/env sh

set -eu

mkdir -p lib/nodejs
rm -rf lib/nodejs/node_modules
node build.js
cp -r ./dist/common/ lib/nodejs/ && cp package.json lib/nodejs/
(cd lib/nodejs && npm install --production)
