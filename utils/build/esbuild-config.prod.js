const jsonEsbuildConfig = require("./esbuild-config.default")
const esbuild = require('esbuild')

// JS
esbuild.build({
  ...jsonEsbuildConfig.config,
  outfile: jsonEsbuildConfig.modulePath + jsonEsbuildConfig.moduleName + ".js",
  bundle: true,
  target: ["es2015"],
}).then(result => {
})

// CJS
esbuild.build({
  ...jsonEsbuildConfig.config,
  outfile: jsonEsbuildConfig.modulePath + jsonEsbuildConfig.moduleName + ".cjs",
  bundle: true,
  format: "cjs",
  target: ["es2015"],
}).then(result => {
})

// Minify
esbuild.build({
  ...jsonEsbuildConfig.config,
  outfile: jsonEsbuildConfig.modulePath + jsonEsbuildConfig.moduleName + ".min.js",
  bundle: true,
  minify: true,
  // sourcemap: true,
  metafile: true,
  target: ["es2015"],
}).then(result => {
  require('fs').writeFileSync('./analytics/esbuild-analyzer-meta.json',
    JSON.stringify(result.metafile))
})

// Module
esbuild.build({
  ...jsonEsbuildConfig.config,
  outfile: jsonEsbuildConfig.modulePath + jsonEsbuildConfig.moduleName + ".module.js",
  bundle: true,
  metafile: true,
  platform: 'node',
  format: 'esm',
  target: ["es2015"],
}).then(result => {
  require('fs').writeFileSync('./analytics/esbuild-analyzer-meta.module.json',
    JSON.stringify(result.metafile))
})