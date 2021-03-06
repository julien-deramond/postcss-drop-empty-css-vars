# postcss-drop-empty-css-vars

[PostCSS] plugin to drop empty CSS variables.

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
  /* Input example */
  --empty-css-var: ;
  --css-var: 1px;
  color: #000;
}
```

```css
.foo {
  /* Output example */
  --css-var: 1px;
  color: #000;
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-drop-empty-css-vars
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-drop-empty-css-vars'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage
