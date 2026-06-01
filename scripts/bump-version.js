#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
 
const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const parts = pkg.version.split('.');
parts[2] = String(Number(parts[2]) + 1);
pkg.version = parts.join('.');
writeFileSync('package.json', JSON.stringify(pkg, null, '\t'));
console.log(`Version bumped to ${pkg.version}`);