install: # install dependencies
	npm ci

brain-games: # run brain-games.js 
	node bin/brain-games.js

publish: # npm publish --dry-run
	npm publish --dry-run

lint: # lint current directory
	npx eslint .