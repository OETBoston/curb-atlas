#!/usr/bin/env node
import ghpages from 'gh-pages';

ghpages.publish('build', { dotfiles: true }, (err) => {
	if (err) console.error(err);
});
