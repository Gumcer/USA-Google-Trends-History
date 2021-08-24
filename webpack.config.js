const path = require('path');
module.exports = {
  entry: './client/index.js',
  mode: "development",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), //this is the folder you want to save your bundle in
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