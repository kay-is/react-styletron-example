module.exports = {
  entry: "./index.js",

  output: {
    filename: "app.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react"]
        }
      }
    ]
  }
};
