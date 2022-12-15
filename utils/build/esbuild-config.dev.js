const jsonEsbuildConfig = require("./esbuild-config.default")
const esbuild = require('esbuild')

esbuild.build({
  ...jsonEsbuildConfig.config,
  outfile: jsonEsbuildConfig.modulePath + jsonEsbuildConfig.moduleName + ".dev.js",
  bundle: true,
  // minify: true,
  metafile: true,
  target: ["es2015"],
  watch: {
    onRebuild(error, result) {
      if (error) console.error('watch build failed:', error)
      else console.log('watch build succeeded:', result)
    },
  },
}).then(result => {
  require('fs').writeFileSync('./analytics/esbuild-analyzer-meta.dev.json',
    JSON.stringify(result.metafile))
  console.log('watching...')

  // setTimeout(() => {
  //   result.stop()
  //   console.log('stopped watching')
  // }, 10 * 1000)
})
