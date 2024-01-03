module.exports = function (config) {
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
