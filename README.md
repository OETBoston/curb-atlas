# Boston Curb Atlas

Displaying curb regulations in Boston.

## Development

- Run `yarn dev`

## Deploy

Currently deploying to Github Pages.

- Run `yarn deploy`

## Bundle into a single JS file

If using in the context of a CMS, we allow for bundling the application to a single JS file.

The JS file expects a target div with the id of `boston-curb-atlas`, otherwise will default to target the `document.body`.

- Run `yarn build-package`
- Bundles to `dist/bundle.iife.js`