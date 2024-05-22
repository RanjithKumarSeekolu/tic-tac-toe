// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks:['jasmine'],
    files: [
      'dist/**/*.js',
      // 'spec/**/*.js'
    ],
    plugins:['karma-jasmine','karma-chrome-launcher','karma-coverage'],
    // coverage reporter generates the coverage
    reporters: ['progress','coverage'],
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/': ['coverage']
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