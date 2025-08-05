module.exports = {
  output: {
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  mode: 'production',
  resolve: {
    extensions: ['.json', '.js', '.ts'],
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx?$/,
  //       use: {
  //         loader: 'babel-loader',
  //       },
  //     }
  //   ],
  // },
  externals: [
    {
      react: 'React',
    },
  ],
};
