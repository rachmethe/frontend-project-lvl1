install: # install dependencies
	npm ci

brain-games: # run brain-games.js 
	node bin/brain-games.js

publish: # npm publish --dry-run
	npm publish --dry-run

lint: # lint current directory
	npx eslint .

brain-even: # start game 'brain even'
	node bin/brain-even.js
brain-calc: # start game 'brain calc'
	node bin/brain-calc.js
brain-gcd: # start game 'brain gcd'
	node bin/brain-gcd.js