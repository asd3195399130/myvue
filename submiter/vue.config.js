const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  devServer: {
    port: 8080,
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "https://jsonplaceholder.typicode.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
});
