const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  //关闭eslint
  lintOnSave: false,
  devServer: { host: "localhost", port: 8080, open: true },
};
