


module.exports = function (config) {

  // Convert relative Markdown file links to relative post links
  const customMarkdownIt = require("markdown-it")({
    html: true,
    replaceLink: link => link.replace(/^([^/][^:]*)\.md(#[^#]+)?$/, "../$1/$2"),
  })
  .use(require("markdown-it-replace-link"));

  config.setLibrary("md", customMarkdownIt);


  const srcDir = "src"
  const dstDir = "public"

  config.addPassthroughCopy(`${srcDir}/assets`)
  config.addPassthroughCopy(`${srcDir}/**/*.css`)
  config.addPassthroughCopy(`${srcDir}/**/*.js`)

  return {
    dir: {
      input: srcDir,
      output: dstDir,
      layouts: '_layouts',
    }
  }

};
