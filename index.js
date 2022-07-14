/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
  return {
    postcssPlugin: 'postcss-drop-empty-css-vars',

    Declaration (decl) {
      // Remove empty CSS variables
      if (decl.toString().startsWith('--') && decl.value.trim() === '') {
        decl.remove();
      }
    }
  }
}

module.exports.postcss = true
