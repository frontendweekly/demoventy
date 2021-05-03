const toml = require('toml');

// Import plugins
const md = require('@frontendweekly/eleventy-plugin-markdown');

// Import filters

// Import transforms


module.exports = function (eleventyConfig) {
  // Watch postcss
  eleventyConfig.addWatchTarget('./11ty/_postcss/');

  // Load plugins

  // Load Filters

  // Load Transforms

  // Passthrough copy
  // config.addPassthroughCopy({'11ty/images': 'images'});

  // I like toml...
  eleventyConfig.addDataExtension('toml', contents => toml.parse(contents));

  // markdown-it config
  eleventyConfig.setLibrary('md', md);

  return {
    dir: {
      input: '11ty',
      output: 'dist',
    },
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
}
