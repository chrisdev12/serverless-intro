#!/usr/bin/env sh

set -e

# Create the lib folder if doesnt exist and remove any node_module that would exist there
mkdir -p lib/nodejs && rm -rf lib/nodejs/node_modules

# Build the project with esbuild
node build.js

# Compose the lambdaLayer desired structure: pass shared to lib/nodejs
(cp -r ./dist/shared/ lib/nodejs/ || echo exit 1)
(cp package.json lib/nodejs/ || echo exit 1)
(cd lib/nodejs && npm install --production)
