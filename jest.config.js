module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/testSetup.js',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css'
  }
}
