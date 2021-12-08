const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: "warning",
  pages: {
    index: {
      entry: "src/main.js",
      title: "G-Calculator",
    },
  },
  productionSourceMap: false,
});
