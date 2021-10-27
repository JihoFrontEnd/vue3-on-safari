module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "^/api": {
        target: "https://quant.cherry-solutions.com",
        ws: true,
        changeOrigin: true,
      },
      "^/flask": {
        target: "http://3.36.78.50:5000",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
