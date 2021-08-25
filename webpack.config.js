const path = require('path');
var SRC_DIR = path.join(__dirname, '/client/Components/index.js')
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: SRC_DIR,
  mode: "development",
  output: {
    filename: 'bundle.js',
    path: DIST_DIR, //this is the folder you want to save your bundle in
  },

 module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        // the order of `use` is important!
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ]
  }
};