#!/bin/bash
.PHONY: build-ShoppingFunction

build-ShoppingFunction:
	$(MAKE) HANDLER=handlers/shopping-handler build-handler

build-RuntimeDependenciesLayer:
	# Create artifact directories.
	mkdir -p "$(ARTIFACTS_DIR)/nodejs"

	# Copy the npm dependency files in nodejs folder to be able to generate node_modules/.
	cp package.json "$(ARTIFACTS_DIR)/nodejs/"
	(cd "$(ARTIFACTS_DIR)/nodejs/" && npm install --production)

	# Build the production node_modules artifacts.
	cp -r dist/shared "$(ARTIFACTS_DIR)/nodejs/"


build-handler:

	# Copy the dist production artifact in his proper artifact controller dir.
	mkdir -p "$(ARTIFACTS_DIR)/dist/handler"
	cp -R "dist/$(HANDLER).js" "$(ARTIFACTS_DIR)/dist/handler" \
	&& cp dist/handlers/module-aliases.js "${ARTIFACTS_DIR}/dist/handler" \
	&& cp package.json "${ARTIFACTS_DIR}/dist"