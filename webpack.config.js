module.exports = {
  mode: "development",
  entry: `${__dirname}/themes/example/static/js/index.ts`,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts"]
  },
  output: {
    path: `${__dirname}/themes/example/static/js/dist`,
    filename: "main.js"
  },
  devServer: {
    contentBase: `${__dirname}/themes/example/static/js/dist`,
    open: true
  }
};
