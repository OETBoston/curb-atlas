#!/usr/bin/env node
import ghpages from 'gh-pages';
import { execSync } from 'child_process';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const version = `v${pkg.version}`;

ghpages.publish('build', { dotfiles: true }, (err) => {
	if (err) {
		console.error(err);
		return;
	}
	try {
		execSync(`git tag ${version}`);
		execSync(`git push origin ${version}`);
		console.log(`Tagged and pushed ${version}`);
	} catch (e) {
		console.error('Tagging failed:', e.message);
	}
});