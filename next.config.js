
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['wTfrcKJbyc1xMyCJGZjH7d'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  