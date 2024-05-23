// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks:['jasmine'],
    files: [
      'spec/**/*.js',
      'build/**/*.js',
    ],
    plugins:['karma-jasmine','karma-chrome-launcher','karma-coverage','karma-webpack'],
    // coverage reporter generates the coverage
    reporters: ['dots','coverage'],
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      'spec/**/*.js': ['webpack'],
      'build/**/*.js': ['webpack'],
    },
    webpack: {
      // Configuration for webpack, ensuring ES6+ support
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins:['istanbul']
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
      dir : 'coverage/',
      check: {
        global: {
          statements: 75,
          branches: 75,
          functions: 75,
          lines: 75,
        },
      },
    },
  });
};