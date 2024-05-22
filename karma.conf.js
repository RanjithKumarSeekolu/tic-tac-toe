// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks:['jasmine'],
    files: [
      'spec/**/*.js',
    ],
    plugins:['karma-jasmine','karma-chrome-launcher','karma-coverage','karma-webpack'],
    // coverage reporter generates the coverage
    reporters: ['progress','coverage'],
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      'spec/**/*.js': ['webpack','coverage'],
    },
    webpack: {
      // Configuration for webpack, ensuring ES6+ support
      module: {
        rules: [
          {
            test: /\.js$/,
            // exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    },
    colors:true,
    singleRun:true,
    browsers:['Chrome'],
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }
  });
};